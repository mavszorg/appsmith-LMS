export default {
	myFun1: async (currentRow) => {
		await storeValue("rowUpdate",currentRow);
		await Save_Data.run({currentRow});
		await get_customer_order_details.run();
		await get_PauseCancel_custOrderDetai.run();
		await get_printer_order_details.run(()			=> { showAlert('Well done!.','success')}, () => {});
	// add mongo connection and update the vendor for this
	},
	myFun2: async (currentRow) => {
		await storeValue("rowUpdate",currentRow);
		await Save_Data2.run({currentRow});
		await get_customer_order_details.run();
		await get_printer_order_details.run(()			=> { get_letter_day_volume.run(),
get_cheque_day_volume.run(), get_postcard_day_volume.run(), showAlert('Well done!.','success')}, () => {});
	},	
		myFun3: async (currentRow) => {
		await storeValue("rowUpdate",currentRow);
		await Save_Data3.run({currentRow});
		await get_printer_order_details.run(()			=> {  showAlert('Well done!.','success')}, () => {});
	},	
	rundateoforder: async () => {
 		 await get_invoicelist.run(()=>{
		 get_PauseCancel_custOrderDetai.run(),
		 get_invoicelist_count.run(),
		 get_letter_day_volume.run(),
		 get_postcard_day_volume.run(),
		 get_cheque_day_volume.run(),
	showAlert('Order date updated!', 'success')
		 }, () => {});
	},
	updateOrderInfo: async () => {
		//get all the order groups for today from mongo
		//letter
		//postcard
		//
	}
}
