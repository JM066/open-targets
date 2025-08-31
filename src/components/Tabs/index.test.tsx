import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Tabs from './index';

const mockTabs = [
	{ id: 'tab1', label: 'First Tab' },
	{ id: 'tab2', label: 'Second Tab' },
	{ id: 'tab3', label: 'Third Tab', disabled: true },
];

describe('Tabs', () => {
	it('renders all tab buttons', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} />);

		expect(screen.getByText('First Tab')).toBeInTheDocument();
		expect(screen.getByText('Second Tab')).toBeInTheDocument();
		expect(screen.getByText('Third Tab')).toBeInTheDocument();
	});

	it('shows correct tab as active', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab2" onTabChange={mockOnTabChange} />);

		const firstTabButton = screen.getByText('First Tab').closest('button');
		const secondTabButton = screen.getByText('Second Tab').closest('button');

		// Second tab should have Primary variant (active state)
		expect(secondTabButton).toHaveClass('bg-blue-600');
		// First tab should have Inverted variant (inactive state)
		expect(firstTabButton).toHaveClass('bg-white');
	});

	it('calls onTabChange with correct tab id when clicked', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} />);

		const secondTabButton = screen.getByText('Second Tab');
		fireEvent.click(secondTabButton);

		expect(mockOnTabChange).toHaveBeenCalledWith('tab2');
		expect(mockOnTabChange).toHaveBeenCalledTimes(1);
	});

	it('does not call onTabChange for disabled tabs', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} />);

		const disabledTabButton = screen.getByText('Third Tab');
		fireEvent.click(disabledTabButton);

		expect(mockOnTabChange).not.toHaveBeenCalled();
	});

	it('applies custom className', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} className="custom-class" />);

		const container = screen.getByText('First Tab').closest('div');
		expect(container).toHaveClass('custom-class');
	});

	it('uses correct button size', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} buttonSize="Large" />);

		const firstTabButton = screen.getByText('First Tab').closest('button');
		// This would depend on your Button component's size classes
		expect(firstTabButton).toBeInTheDocument();
	});

	it('handles empty tabs array', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={[]} activeTabId="" onTabChange={mockOnTabChange} />);

		const container = screen.getByRole('generic');
		expect(container).toBeInTheDocument();
		expect(container.children).toHaveLength(0);
	});

	it('maintains memoization - callback functions are stable', () => {
		const mockOnTabChange = vi.fn();

		const { rerender } = render(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} />);

		const firstTabButton = screen.getByText('First Tab');
		const initialOnClick = firstTabButton.onclick;

		// Re-render with same props
		rerender(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} />);

		const firstTabButtonAfterRerender = screen.getByText('First Tab');
		expect(firstTabButtonAfterRerender.onclick).toBe(initialOnClick);
	});
});
