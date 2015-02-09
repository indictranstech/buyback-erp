frappe.listview_settings['Purchase Order'] = {
	add_fields: ["grand_total", "company", "currency", "supplier",
		"buy_back_requisition_ref", "per_received", "per_billed"],
		filters: [["naming_series", "=", "PO-BB-"]]
};
