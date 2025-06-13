'use client';

import CustomersTable from '@/components/dashboard/CustomersTable';
import DashboardHighlightCustomers from '@/components/dashboard/HighlightCustomers';
import DashboardTotalSalesPerDayChart from '@/components/dashboard/TotalSalesPerDayChart';
import { getClientsInfos } from '@/services/api/customers/getCustomersInfo';
import {
  formatCustomerSalesDataForChart,
  formatCustomersDataForTable,
  formatHighlightCustomersDataForChat,
} from '@/services/utils';
import React, { useState } from 'react';

export default function Dashboard() {
  const [clientsInfos, setClientsInfos] = useState(getClientsInfos());

  const refreshClients = () => {
    const updated = JSON.parse(JSON.stringify(getClientsInfos()));
    setClientsInfos(updated);
  };

  return (
    <section className="flex flex-col h-screen p-5 gap-y-5">
      <div className="flex flex-1 gap-5">
        <DashboardTotalSalesPerDayChart
          data={formatCustomerSalesDataForChart(clientsInfos)}
        />
        <DashboardHighlightCustomers
          data={formatHighlightCustomersDataForChat(clientsInfos)}
        />
      </div>
      <CustomersTable
        data={formatCustomersDataForTable(clientsInfos)}
        onAddCustomer={refreshClients}
      />
    </section>
  );
}
