import React, { useState, useRef } from 'react';

type Tab = {
    label: string;
    content: React.ReactNode;
};

type TabComponentProps = {
    tabs: Tab[];
    defaultActiveTabIndex?: number;
};

const TabComponent: React.FC<TabComponentProps> = ({ tabs, defaultActiveTabIndex = 0 }) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(defaultActiveTabIndex);
    const headerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full flex flex-col items-center justify-center pt-10">
            {/* Tab Headers */}
            <div ref={headerRef} className="flex ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTabIndex(index)}
                        className={`px-4 py-2 text-sm font-medium focus:outline-none border-b-2 transition-colors duration-200 ${
                            activeTabIndex === index
                                ? 'border-blue-500 text-blue-500'
                                : 'border-transparent text-gray-500 hover:text-blue-500'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div
                className="p-4 border border-gray-200 rounded-lg w-full"
            >
                {tabs[activeTabIndex]?.content}
            </div>
        </div>
    );
};

export default TabComponent;