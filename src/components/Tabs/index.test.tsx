import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Tabs from './index';

const mockTabs = [
	{ id: 'bar', label: 'First Tab' },
	{ id: 'radar', label: 'Second Tab' },
];

describe('Tabs', () => {
	it('renders all tab buttons', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="bar" onTabChange={mockOnTabChange} />);

		// Use the actual labels from mockTabs
		const firstTabButton = screen.getByRole('button', { name: 'First Tab' });
		const secondTabButton = screen.getByRole('button', { name: 'Second Tab' });
		expect(firstTabButton).toBeInTheDocument();
		expect(secondTabButton).toBeInTheDocument();
	});

	it('shows correct tab as active', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="bar" onTabChange={mockOnTabChange} />);

		const firstTabButton = screen.getByRole('button', { name: 'First Tab' });
		const secondTabButton = screen.getByRole('button', { name: 'Second Tab' });

		// First tab is active (Primary variant), second tab is inactive (Inverted variant)
		expect(firstTabButton).toHaveClass('text-white', 'bg-blue-600');
		expect(secondTabButton).toHaveClass('text-blue-600', 'bg-white');
	});

	it('calls onTabChange with correct tab id when clicked', async () => {
		const user = userEvent.setup();
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="bar" onTabChange={mockOnTabChange} />);

		const secondTabButton = screen.getByRole('button', { name: 'Second Tab' });
		await user.click(secondTabButton);

		expect(mockOnTabChange).toHaveBeenCalledWith('radar');
		expect(mockOnTabChange).toHaveBeenCalledTimes(1);
	});

	it('handles empty tabs array', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={[]} activeTabId="" onTabChange={mockOnTabChange} />);

		const tabsContainer = screen.getByTestId('tabs');
		expect(tabsContainer).toBeInTheDocument();
		expect(tabsContainer.children).toHaveLength(0);
	});
});
