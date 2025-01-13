import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const DepositPage = () => {
  return (
    <PageContainer>
      <div className="space-y-4">
        <Heading title="Deposit" description="" />
        <Separator />
        <div className="container mx-auto border border-dashed rounded-md">
          <Tabs className="mx-auto ">
            <TabsList>
              <TabsTrigger value="deposit">Deposit</TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            </TabsList>
            <TabsContent value="deposit">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount to Deposit
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="account"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="account"
                    name="account"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter account number"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Deposit
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="withdraw">
              {/* <WithdrawForm /> */}
              456
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageContainer>
  );
};

export default DepositPage;
