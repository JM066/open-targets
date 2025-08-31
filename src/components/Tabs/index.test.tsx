import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Tabs from './index';

const mockTabs = [
	{ id: 'tab1', label: 'First Tab' },
	{ id: 'tab2', label: 'Second Tab' },
];

describe('Tabs', () => {
	it('renders all tab buttons', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} />);

		expect(screen.getByTestId('tab-tab1')).toBeInTheDocument();
		expect(screen.getByTestId('tab-tab2')).toBeInTheDocument();
	});

	it('shows correct tab as active', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab2" onTabChange={mockOnTabChange} />);

		const firstTabButton = screen.getByTestId('tab-tab1');
		const secondTabButton = screen.getByTestId('tab-tab2');

		// tab1 is active, so it should have Primary variant classes
		expect(firstTabButton).toHaveClass('text-blue-600');
		expect(secondTabButton).toHaveClass('text-white');
	});

	it('calls onTabChange with correct tab id when clicked', async () => {
		const user = userEvent.setup();
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={mockTabs} activeTabId="tab1" onTabChange={mockOnTabChange} />);

		const secondTabButton = screen.getByTestId('tab-tab2');
		await user.click(secondTabButton);

		expect(mockOnTabChange).toHaveBeenCalledWith('tab2');
		expect(mockOnTabChange).toHaveBeenCalledTimes(1);
	});

	it('handles empty tabs array', () => {
		const mockOnTabChange = vi.fn();

		render(<Tabs tabs={[]} activeTabId="" onTabChange={mockOnTabChange} />);

		const tabsContainer = screen.getByTestId('tabs-container');
		expect(tabsContainer).toBeInTheDocument();
		expect(tabsContainer.children).toHaveLength(0);
	});
});
