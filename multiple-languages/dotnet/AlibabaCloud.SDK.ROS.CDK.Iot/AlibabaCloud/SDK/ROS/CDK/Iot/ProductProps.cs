using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::IOT::Product`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-iot.ProductProps")]
    public class ProductProps : AlibabaCloud.SDK.ROS.CDK.Iot.IProductProps
    {
        /// <summary>Property nodeType: The node type of the product.</summary>
        /// <remarks>
        /// Values:
        /// 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
        /// either directly or as a sub-device of a gateway.
        /// 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
        /// the topological relationships with sub-devices, and synchronize the topological relationships
        /// to IoT Platform.
        /// </remarks>
        [JsiiProperty(name: "nodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NodeType
        {
            get;
            set;
        }

        /// <summary>Property productName: The name of the product.</summary>
        /// <remarks>
        /// A product name can be 4 to 30 characters in length and can
        /// contain Chinese characters, English letters, digits, and underscores (_).
        /// Note A product name must be unique in an account.
        /// </remarks>
        [JsiiProperty(name: "productName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProductName
        {
            get;
            set;
        }

        /// <summary>Property aliyunCommodityCode: The edition of the product that you want to create.</summary>
        /// <remarks>
        /// There are two options:
        /// iothub_senior: Pro Edition.
        /// iothub: Basic Edition.
        /// If you do not input this parameter, the default value is used, which is iothub (Basic
        /// Edition).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aliyunCommodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AliyunCommodityCode
        {
            get;
            set;
        }

        /// <summary>Property authType: Authentication device to access the Internet of Things platform under the product.</summary>
        /// <remarks>
        /// Optional:
        /// secret: using a device key for device authentication.
        /// Details can be found MQTT-TCP connection communication.
        /// id2: Use things device authentication ID.
        /// x509: X.509 certificates using the device for device authentication.
        /// The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
        /// If this parameter is passed, the default value is secret.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AuthType
        {
            get;
            set;
        }

        /// <summary>Property categoryKey: Identifier Product category.</summary>
        /// <remarks>
        /// If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        /// Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "categoryKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CategoryKey
        {
            get;
            set;
        }

        /// <summary>Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.</summary>
        /// <remarks>
        /// This parameter is only available and required when you create a Pro Edition product.
        /// Options:
        /// 0: Do not parse/Custom.
        /// 1: Alink JSON.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dataFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DataFormat
        {
            get;
            set;
        }

        /// <summary>Property description: A description of the product.</summary>
        /// <remarks>
        /// The description can be a maximum of 100 characters in
        /// length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property id2: Whether ID2 certification.</summary>
        /// <remarks>
        /// Optional values:
        /// true: the opening of ID2 certification.
        /// false: do not open ID2 certification.
        /// Do not pass this parameter, the default is not opened.
        /// Explanation
        /// Only 2 East China (Shanghai) regional support ID2 authentication.
        /// If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "id2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Id2
        {
            get;
            set;
        }

        /// <summary>Property iotInstanceId: Public instance does not pass this parameter;</summary>
        /// <remarks>
        /// instance that you need to buy the incoming instance ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IotInstanceId
        {
            get;
            set;
        }

        /// <summary>Property joinPermissionId: LoRaWAN network credential ID.</summary>
        /// <remarks>
        /// When networking mode NetType chosen LORA, the necessary parameters.
        /// Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        /// If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "joinPermissionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? JoinPermissionId
        {
            get;
            set;
        }

        /// <summary>Property netType: Networking mode.</summary>
        /// <remarks>
        /// Set this parameter only if you are creating a product whose devices directly connect
        /// to IoT Platform.
        /// Options:
        /// WIFI
        /// CELLULAR
        /// ETHERNET
        /// OTHER
        /// The default value is WIFI.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NetType
        {
            get;
            set;
        }

        /// <summary>Property protocolType: The protocol that devices of this product use to connect to gateways.</summary>
        /// <remarks>
        /// Set this parameter only if you are creating a product whose devices will be connected
        /// to gateways.
        /// Options:
        /// modbus: Modbus.
        /// opc-ua: OPC UA.
        /// customize: Customized protocol.
        /// ble: BLE.
        /// zigbee: ZigBee.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProtocolType
        {
            get;
            set;
        }

        /// <summary>Property publishAuto: Whether to automatically model publication after the product is created.</summary>
        /// <remarks>
        /// true: publishing.
        /// false: not released.
        /// This parameter is not passed, the default value true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "publishAuto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PublishAuto
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.</summary>
        /// <remarks>
        /// If this parameter is passed, the product will be classified as a default resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }
    }
}
