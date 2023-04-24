var group__iot__usb__host =
[
    [ "IotUsbDeviceEndpointConfig_t", "struct_iot_usb_device_endpoint_config__t.html", [
      [ "usMaxPacketSize", "struct_iot_usb_device_endpoint_config__t.html#acf05744a96d41206079ffd7aab288d71", null ],
      [ "ucEndpointAddress", "struct_iot_usb_device_endpoint_config__t.html#a9227b7a2c96569462d950e9f2711160d", null ],
      [ "ucTransferType", "struct_iot_usb_device_endpoint_config__t.html#a2bd1e4e01527276acd897fbe0b42b61e", null ],
      [ "ucZlt", "struct_iot_usb_device_endpoint_config__t.html#a7b3f930b14e8fa52332d7944ee59cc1d", null ],
      [ "ucInterval", "struct_iot_usb_device_endpoint_config__t.html#a16aad1ee4c9ffff92da436c8560b37a3", null ]
    ] ],
    [ "IotUsbInterfaceInfo_t", "struct_iot_usb_interface_info__t.html", [
      [ "endpoint", "struct_iot_usb_interface_info__t.html#ac4890bebd681ceffb2a84e82cb4abfa3", null ],
      [ "ucInterfaceIndex", "struct_iot_usb_interface_info__t.html#afa9d1b9ecf19f0814057d799be98e1f8", null ],
      [ "ucEpCount", "struct_iot_usb_interface_info__t.html#a6d727673a96006381745d7014dd936cd", null ],
      [ "ucAlternateSettingNumber", "struct_iot_usb_interface_info__t.html#a74b044785da1309a90c59b19d701ca20", null ]
    ] ],
    [ "IotUsbConfigurationInfo_t", "struct_iot_usb_configuration_info__t.html", [
      [ "pxInterface", "struct_iot_usb_configuration_info__t.html#a477325f33d5dd5f5c921e4746c050916", null ],
      [ "ucInterfaceCount", "struct_iot_usb_configuration_info__t.html#acd823113b60c6ef3cc57643fa8126fd3", null ]
    ] ],
    [ "IotUsbDeviceInfo_t", "struct_iot_usb_device_info__t.html", [
      [ "ucSpeed", "struct_iot_usb_device_info__t.html#adae3163272a8be0d7540a866f2499b94", null ],
      [ "ucDevAddress", "struct_iot_usb_device_info__t.html#a2589db39f9c70338cef6156e6a0a6a5e", null ],
      [ "usPid", "struct_iot_usb_device_info__t.html#a1eda3f828b21e4a0db1ac402a1326050", null ],
      [ "usVid", "struct_iot_usb_device_info__t.html#a935ef517cfd4424084ab6d6eb488d44b", null ]
    ] ],
    [ "IOT_USB_HOST_SUCCESS", "group__iot__usb__host.html#ga2f94e99434ea52eba94e3fcf49d2d182", null ],
    [ "IOT_USB_HOST_ERROR", "group__iot__usb__host.html#gab7ffa46ce41922c70f2fb45d6d8c7b61", null ],
    [ "IOT_USB_HOST_BUSY", "group__iot__usb__host.html#ga45ce8510d8e6481fb4283e5b2be2eb29", null ],
    [ "IOT_USB_HOST_INVALID_VALUE", "group__iot__usb__host.html#gad38ee05d231937830c85f00861615a61", null ],
    [ "IOT_USB_HOST_WRITE_FAIL", "group__iot__usb__host.html#ga608def8529c5637b912fd20e9325ccaa", null ],
    [ "IOT_USB_HOST_READ_FAIL", "group__iot__usb__host.html#gaf2a26732d9a579c466f03de7450b3722", null ],
    [ "IOT_USB_HOST_CANCEL_FAILED", "group__iot__usb__host.html#ga97c2a18786f764f3d323905c050ebca5", null ],
    [ "IOT_USB_HOST_FUNCTION_NOT_SUPPORTED", "group__iot__usb__host.html#ga7cd9a2f16feff2a696eb2f1a72fc5a9e", null ],
    [ "IOT_USB_HOST_NOTHING_TO_CANCEL", "group__iot__usb__host.html#ga354ba3c864b33bb425a4ad2f31101049", null ],
    [ "IOT_USB_HOST_MAX_ENDPOINTS", "group__iot__usb__host.html#gad18559971c0a673d866de8d11ad796b3", null ],
    [ "IotUsbHostHandle_t", "group__iot__usb__host.html#ga0cb5468c4afe8e08848c313102699b2e", null ],
    [ "IotUsbDeviceHandle_t", "group__iot__usb__host.html#gafef9b113ed9ec0661dad02268665ddde", null ],
    [ "IotUsbConfigHandle_t", "group__iot__usb__host.html#ga971e710155bdcd3ac8e25964c5e38aa0", null ],
    [ "IotUsbInterfaceHandle_t", "group__iot__usb__host.html#ga904a311e0ce0ab91fdeb63b16a5eaa04", null ],
    [ "IotPipeHandle_t", "group__iot__usb__host.html#ga3f2274b2a0a1fa069bd631e02d2627cc", null ],
    [ "IotUsbHostCallback_t", "group__iot__usb__host.html#ga80a95f7769f0919f684e0ecad2e94702", null ],
    [ "IotUsbHostTransferCallback_t", "group__iot__usb__host.html#gaad25fa1eabba93f45de8dc98cc9b6a81", null ],
    [ "IotUsbHostEvent_t", "group__iot__usb__host.html#ga5f3e97e262a364f2d68872ece42f904b", [
      [ "eUSBHostAttachEvent", "group__iot__usb__host.html#gga5f3e97e262a364f2d68872ece42f904ba4eef9bb6743fd3bf17a31534927ffffe", null ],
      [ "eUSBHostDetachEvent", "group__iot__usb__host.html#gga5f3e97e262a364f2d68872ece42f904ba0b58ab0dad0483da4c4a4661f2e52cdc", null ],
      [ "eUSBHostEnumerationDoneEvent", "group__iot__usb__host.html#gga5f3e97e262a364f2d68872ece42f904ba97726003cc9dcd85182ab09ef9486d9c", null ],
      [ "eUSBHostResetEvent", "group__iot__usb__host.html#gga5f3e97e262a364f2d68872ece42f904ba5c02d35ea451de81ad04b06f8aca0b37", null ],
      [ "eUSBHostSuspendEvent", "group__iot__usb__host.html#gga5f3e97e262a364f2d68872ece42f904bab554ef470a395beb91ae212313732bf2", null ],
      [ "eUSBHostResumeEvent", "group__iot__usb__host.html#gga5f3e97e262a364f2d68872ece42f904ba36164f06d05a150671ea07c0fd3b8b54", null ],
      [ "eUSBHostRemoteWakeEvent", "group__iot__usb__host.html#gga5f3e97e262a364f2d68872ece42f904bae022b304e46e5d65f8b4c02cafa20b01", null ]
    ] ],
    [ "IotUsbHostIoctlRequest_t", "group__iot__usb__host.html#gaefaa5b2a7c2a74532c5872d43e804091", [
      [ "eUSBHostGetHosthandle", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091ad30cfea9a04fe91ff1bd4035926b6e98", null ],
      [ "eUSBHostGetDeviceControlPipe", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091a08b55ca9c99fc9b2fc0c22698d742b1a", null ],
      [ "eUSBHostGetDeviceAddress", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091a5f0eb64327ad143a0e0322f088accd49", null ],
      [ "eUSBHostOpenDeviceInterface", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091a799b4df11a595d8924f314cbebb798e4", null ],
      [ "eUSBHostCloseDeviceInterface", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091aa7892e666a1c4fa3538b7c24207a6ee7", null ],
      [ "eUSBHostGetDeviceInfo", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091a5c2aead88f98d3022c29fd3a0720461a", null ],
      [ "eUSBHostGetInterfaceInfo", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091aac42e52c4e74bbed7c51da89b871b582", null ],
      [ "eUSBHostGetInterfaceDescriptor", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091a62c370a7220c6eed2d62d06cdd28ae6f", null ],
      [ "eUSBHostGetConfigureHandle", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091afe5a41611e41a7be1aea679ae252a869", null ],
      [ "eUSBHostGetInterfaceHandle", "group__iot__usb__host.html#ggaefaa5b2a7c2a74532c5872d43e804091a8c73238f86e9473ae696c207605cb5ff", null ]
    ] ],
    [ "iot_usb_host_open", "group__iot__usb__host.html#ga10ea4f90b8176bd0e221e1e11de6c04f", null ],
    [ "iot_usb_host_set_host_callback", "group__iot__usb__host.html#gab2e12014782cec637995c8a079ddcaea", null ],
    [ "iot_usb_host_set_pipe_callback", "group__iot__usb__host.html#gae41051f90f5f2ddac1691304bac1f7e8", null ],
    [ "iot_usb_host_pipe_open", "group__iot__usb__host.html#gaf4468f6c8f2471cc7ad8feeea1c95b42", null ],
    [ "iot_usb_host_pipe_close", "group__iot__usb__host.html#ga7002bfa274b17ee75acd776fc0a7d9d1", null ],
    [ "iot_usb_host_read_async", "group__iot__usb__host.html#gaefb9c81259fca20a5ce4fb2be84d6e14", null ],
    [ "iot_usb_host_write_async", "group__iot__usb__host.html#ga8ec029fd386392d71c53db751f0075ca", null ],
    [ "iot_usb_host_read_sync", "group__iot__usb__host.html#ga263a166dba60098038156832b118ae77", null ],
    [ "iot_usb_host_write_sync", "group__iot__usb__host.html#ga5c849bbfe4aa4bd083b42be360ee81b3", null ],
    [ "iot_usb_host_cancel", "group__iot__usb__host.html#gadcbc7b86145b24b1f13b184896d87e12", null ],
    [ "iot_usb_host_ioctl", "group__iot__usb__host.html#gaf285b7e6747ee241c9d61f9deae42776", null ],
    [ "iot_usb_host_send_setup", "group__iot__usb__host.html#ga146fee932ad56c351b5b35bb4a307e72", null ],
    [ "iot_usb_host_close", "group__iot__usb__host.html#ga94561c6319cc067d2fb1a0a560709271", null ]
];