var group__iot__usb__device =
[
    [ "IotUsbDeviceEndpointConfig_t", "struct_iot_usb_device_endpoint_config__t.html", [
      [ "usMaxPacketSize", "struct_iot_usb_device_endpoint_config__t.html#acf05744a96d41206079ffd7aab288d71", null ],
      [ "ucEndpointAddress", "struct_iot_usb_device_endpoint_config__t.html#a9227b7a2c96569462d950e9f2711160d", null ],
      [ "ucTransferType", "struct_iot_usb_device_endpoint_config__t.html#a2bd1e4e01527276acd897fbe0b42b61e", null ],
      [ "ucZlt", "struct_iot_usb_device_endpoint_config__t.html#a7b3f930b14e8fa52332d7944ee59cc1d", null ],
      [ "ucInterval", "struct_iot_usb_device_endpoint_config__t.html#a16aad1ee4c9ffff92da436c8560b37a3", null ]
    ] ],
    [ "IotUsbDeviceEndpointInfo_t", "struct_iot_usb_device_endpoint_info__t.html", [
      [ "ucEndpointAddress", "struct_iot_usb_device_endpoint_info__t.html#ac20c8725db8ee89888a857fca01e8525", null ],
      [ "usEndpointStatus", "struct_iot_usb_device_endpoint_info__t.html#a79af672ae68049731c94bd8b9a39e9e8", null ]
    ] ],
    [ "IotUsbDeviceHandle_t", "group__iot__usb__device.html#gafef9b113ed9ec0661dad02268665ddde", null ],
    [ "IotUsbDeviceCallback_t", "group__iot__usb__device.html#ga437a049730541ce250069e732c73e657", null ],
    [ "IotUsbDeviceEndpointCallbackFn_t", "group__iot__usb__device.html#gad65c959df5e4c4179ac5262a8647da5b", null ],
    [ "IotUsbDeviceEvent_t", "group__iot__usb__device.html#gaa9fdde19e4564cd6b01aa1a8468a9055", [
      [ "eUSBDeviceBusResetEvent", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055ad65b106705e0f9120484dde7de12accc", null ],
      [ "eUSBDeviceLPMState1Event", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055a9d28b253d2d8a296a5e08018ebaf39a2", null ],
      [ "eUSBDeviceLPMState2Event", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055a08437527442a446ca1e78ab37ded0eee", null ],
      [ "eUSBDeviceLPMState3Event", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055a0f7ef73ab4282c1f9a83daf8a0f2441e", null ],
      [ "eUSBDeviceLPMState1ResumeEvent", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055aa4ec844d3094ec7743eac8dc3ebf4c6a", null ],
      [ "eUSBDeviceLPMState2ResumeEvent", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055a6844b06d50c73c1b55e5299ec34cdc59", null ],
      [ "eUSBDeviceLPMState3ResumeEvent", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055ae538d4e891b43c6ead52df1ced05d609", null ],
      [ "eUSBDeviceErrorEvent", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055aacff1058e6a7726725b97635baad1fd5", null ],
      [ "eUSBDeviceDetachEvent", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055a8e09cdcf6152457ed088cf2ab163f99d", null ],
      [ "eUSBDeviceAttachEvent", "group__iot__usb__device.html#ggaa9fdde19e4564cd6b01aa1a8468a9055a663a3b5a26057883cdc1ebc0e5c546cf", null ]
    ] ],
    [ "IotUsbDeviceIoctlRequest_t", "group__iot__usb__device.html#ga34f1397e05c95d52de786262d04ae9f6", [
      [ "eUSBDeviceGetSpeed", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a23f12407318123e9c62f237000d7b435", null ],
      [ "eUSBDeviceGetAddress", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a6820c49b295bef9d7f7a31504e0c1cdd", null ],
      [ "eUSBDeviceSetAddress", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6aa22fa0d10e8e6e1cb434ce4d73748006", null ],
      [ "eUSBDeviceGetEndpointStatus", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a2ad1cf70a51f28b730b1e76b09d8cac1", null ],
      [ "eUSBDeviceGetState", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6afb17fc0bd7778af9736174db724bf0ac", null ],
      [ "eUSBDeviceGetStatus", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a869be5f7e969dd2aaf89be61d8b1c8b4", null ],
      [ "eUSBDeviceGetSyncFrame", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6ad01a775e5fc0b722fe4afed4e4b8c321", null ],
      [ "eUSBDeviceSetTestMode", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a83e8bbffcbffa50c8ea2951ac197d00c", null ],
      [ "eUSBDeviceSetState", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a6ce0a867e790fe9ecdf8926a45c0c407", null ],
      [ "eUSBDeviceLPMState1Suspend", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a8478a49ac8cfbe6ae877e914baefe752", null ],
      [ "eUSBDeviceLPMState1Resume", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a91525aabaa49c7ec8b48d09426f48469", null ],
      [ "eUSBDeviceLPMState2Suspend", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6af028596a084313d81ee06fff3be6831a", null ],
      [ "eUSBDeviceLPMState2Resume", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a67cdf86203ad2877be23e208862dff80", null ],
      [ "eUSBDeviceLPMState3Suspend", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a0cc555bf76fb5dbad07f6a0ad022c961", null ],
      [ "eUSBDeviceLPMState3Resume", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6a4751ec41cda30671c829a75abc083f18", null ],
      [ "eUSBDeviceRemoteWakeup", "group__iot__usb__device.html#gga34f1397e05c95d52de786262d04ae9f6afd7a008e098c835ae1be1db2e84082f7", null ]
    ] ],
    [ "IotUsbDeviceState_t", "group__iot__usb__device.html#gabe647831f6bbcb1a0e57d79dd17b6540", [
      [ "eUsbDeviceStateConfigured", "group__iot__usb__device.html#ggabe647831f6bbcb1a0e57d79dd17b6540a8d42ab931c780bfa2667272a7c2772d3", null ],
      [ "eUsbDeviceStateAddress", "group__iot__usb__device.html#ggabe647831f6bbcb1a0e57d79dd17b6540afe6e254ebf34234957ad32f786d02b50", null ],
      [ "eUsbDeviceStateDefault", "group__iot__usb__device.html#ggabe647831f6bbcb1a0e57d79dd17b6540a5f62fe36e0657f6f328fda75f8738225", null ],
      [ "eUsbDeviceStateAddressing", "group__iot__usb__device.html#ggabe647831f6bbcb1a0e57d79dd17b6540a5c356a18c9e773195a4456be402b9709", null ],
      [ "eUsbDeviceStateTestMode", "group__iot__usb__device.html#ggabe647831f6bbcb1a0e57d79dd17b6540ae5463617abb9039e150ee439bb30b6c6", null ]
    ] ],
    [ "IotUsbDeviceEndpointStatus_t", "group__iot__usb__device.html#ga7b5f3572fdcf39e2fbddcdc9df62205d", [
      [ "eUsbDeviceEndpointStateIdle", "group__iot__usb__device.html#gga7b5f3572fdcf39e2fbddcdc9df62205daddf48a6367af7fd3818210fd0b2e71ec", null ],
      [ "eUsbDeviceEndpointStateStalled", "group__iot__usb__device.html#gga7b5f3572fdcf39e2fbddcdc9df62205daaaf477de657b5e5d4b2b2129fc8efa09", null ],
      [ "eUsbDeviceEndpointStateBusy", "group__iot__usb__device.html#gga7b5f3572fdcf39e2fbddcdc9df62205da4abe64211c786303018b66e6aefb0ccc", null ],
      [ "eUsbDeviceEndpointStateClosed", "group__iot__usb__device.html#gga7b5f3572fdcf39e2fbddcdc9df62205da67abd30de4001c1e6219d50d5e7f7cb3", null ]
    ] ],
    [ "IotUsbHostController_t", "group__iot__usb__device.html#gaabb9cdd5422fd2a245e8ad60af70ef1b", [
      [ "eUsbDeviceControllerOHCI", "group__iot__usb__device.html#ggaabb9cdd5422fd2a245e8ad60af70ef1ba33ed19a9cabfc23211954990f1629a23", null ],
      [ "eUsbDeviceControllerUHCI", "group__iot__usb__device.html#ggaabb9cdd5422fd2a245e8ad60af70ef1ba96c02678d011e0156199120fc5341b68", null ],
      [ "eUsbDeviceControllerEHCI", "group__iot__usb__device.html#ggaabb9cdd5422fd2a245e8ad60af70ef1ba96b8c602f74e325ce7b5ded1bda8089f", null ],
      [ "eUsbDeviceControllerXHCI", "group__iot__usb__device.html#ggaabb9cdd5422fd2a245e8ad60af70ef1baa421b0b8554d361f2f4d2097669d213c", null ]
    ] ],
    [ "IotUsbDeviceOperationStatus_t", "group__iot__usb__device.html#gac768a7b998f729ec407dcab8252186bf", [
      [ "eUsbDeviceCompleted", "group__iot__usb__device.html#ggac768a7b998f729ec407dcab8252186bfa945a2e6b3219190ab822462408e61953", null ],
      [ "eUsbDeviceReadFailed", "group__iot__usb__device.html#ggac768a7b998f729ec407dcab8252186bfa9da39379c0bee58b06a0bdc287cf6eb9", null ],
      [ "eUsbDeviceWriteFailed", "group__iot__usb__device.html#ggac768a7b998f729ec407dcab8252186bfaef115e29e2f8a8e4af0088ecd1393056", null ]
    ] ],
    [ "iot_usb_device_open", "group__iot__usb__device.html#ga6698a89549fa2b3af760362fddac3c0a", null ],
    [ "iot_usb_device_connect", "group__iot__usb__device.html#gaea81f3ce35499f570426ad71ff6100b1", null ],
    [ "iot_usb_device_disconnect", "group__iot__usb__device.html#ga3ac3f31f7acc9200a5cb2ce25248b787", null ],
    [ "iot_usb_device_set_device_callback", "group__iot__usb__device.html#ga8c1e229cb9f2a4d2195b8c9bf5f8077e", null ],
    [ "iot_usb_device_endpoint_open", "group__iot__usb__device.html#gae04cbbe6477e5c53172cb694c8c79690", null ],
    [ "iot_usb_device_set_endpoint_callback", "group__iot__usb__device.html#ga012fc7a5f494aab22340de099b89de58", null ],
    [ "iot_usb_device_endpoint_close", "group__iot__usb__device.html#gacd5c7d08d9b747ddb093295670d648d9", null ],
    [ "iot_usb_device_endpoint_stall", "group__iot__usb__device.html#ga0bfa047c2b3bf6d5737c0a7fb76a5086", null ],
    [ "iot_usb_device_endpoint_unstall", "group__iot__usb__device.html#ga6e78156384ad3239af107d7f7a1fae76", null ],
    [ "iot_usb_device_read_sync", "group__iot__usb__device.html#gae79115cc930cea3e0dacdbde5e97c1af", null ],
    [ "iot_usb_device_write_sync", "group__iot__usb__device.html#gaa276a34583e966ad28c4c93be6e79d3d", null ],
    [ "iot_usb_device_read_async", "group__iot__usb__device.html#gaf37c5c0ffacd82bb2027cf860d69277f", null ],
    [ "iot_usb_device_write_async", "group__iot__usb__device.html#gaf3592d13791e2840b816488044b2427f", null ],
    [ "iot_usb_device_ioctl", "group__iot__usb__device.html#ga8dc324960d6b47de7c113c6794347bf9", null ],
    [ "iot_usb_device_endpoint_cancel_transfer", "group__iot__usb__device.html#gad05f172afa3dfff087456db69688cb5b", null ],
    [ "iot_usb_device_close", "group__iot__usb__device.html#gac2a25b1ca7330ec54af4b13487230258", null ]
];