package com.aliyun.ros.cdk.iot;

/**
 * A ROS resource type:  `ALIYUN::IOT::Product`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.633Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.Product")
public class Product extends com.aliyun.ros.cdk.core.Resource {

    protected Product(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Product(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::IOT::Product`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Product(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.ProductProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::IOT::Product`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Product(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.ProductProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProductKey() {
        return software.amazon.jsii.Kernel.get(this, "attrProductKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.Product}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.Product> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.iot.ProductProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.ProductProps.Builder();
        }

        /**
         * Property nodeType: The node type of the product.
         * <p>
         * Values:
         * 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
         * either directly or as a sub-device of a gateway.
         * 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
         * the topological relationships with sub-devices, and synchronize the topological relationships
         * to IoT Platform.
         * <p>
         * @return {@code this}
         * @param nodeType Property nodeType: The node type of the product. This parameter is required.
         */
        public Builder nodeType(final java.lang.Number nodeType) {
            this.props.nodeType(nodeType);
            return this;
        }
        /**
         * Property nodeType: The node type of the product.
         * <p>
         * Values:
         * 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
         * either directly or as a sub-device of a gateway.
         * 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
         * the topological relationships with sub-devices, and synchronize the topological relationships
         * to IoT Platform.
         * <p>
         * @return {@code this}
         * @param nodeType Property nodeType: The node type of the product. This parameter is required.
         */
        public Builder nodeType(final com.aliyun.ros.cdk.core.IResolvable nodeType) {
            this.props.nodeType(nodeType);
            return this;
        }

        /**
         * Property productName: The name of the product.
         * <p>
         * A product name can be 4 to 30 characters in length and can
         * contain Chinese characters, English letters, digits, and underscores (_).
         * Note A product name must be unique in an account.
         * <p>
         * @return {@code this}
         * @param productName Property productName: The name of the product. This parameter is required.
         */
        public Builder productName(final java.lang.String productName) {
            this.props.productName(productName);
            return this;
        }
        /**
         * Property productName: The name of the product.
         * <p>
         * A product name can be 4 to 30 characters in length and can
         * contain Chinese characters, English letters, digits, and underscores (_).
         * Note A product name must be unique in an account.
         * <p>
         * @return {@code this}
         * @param productName Property productName: The name of the product. This parameter is required.
         */
        public Builder productName(final com.aliyun.ros.cdk.core.IResolvable productName) {
            this.props.productName(productName);
            return this;
        }

        /**
         * Property aliyunCommodityCode: The edition of the product that you want to create.
         * <p>
         * There are two options:
         * iothub_senior: Pro Edition.
         * iothub: Basic Edition.
         * If you do not input this parameter, the default value is used, which is iothub (Basic
         * Edition).
         * <p>
         * @return {@code this}
         * @param aliyunCommodityCode Property aliyunCommodityCode: The edition of the product that you want to create. This parameter is required.
         */
        public Builder aliyunCommodityCode(final java.lang.String aliyunCommodityCode) {
            this.props.aliyunCommodityCode(aliyunCommodityCode);
            return this;
        }
        /**
         * Property aliyunCommodityCode: The edition of the product that you want to create.
         * <p>
         * There are two options:
         * iothub_senior: Pro Edition.
         * iothub: Basic Edition.
         * If you do not input this parameter, the default value is used, which is iothub (Basic
         * Edition).
         * <p>
         * @return {@code this}
         * @param aliyunCommodityCode Property aliyunCommodityCode: The edition of the product that you want to create. This parameter is required.
         */
        public Builder aliyunCommodityCode(final com.aliyun.ros.cdk.core.IResolvable aliyunCommodityCode) {
            this.props.aliyunCommodityCode(aliyunCommodityCode);
            return this;
        }

        /**
         * Property authType: Authentication device to access the Internet of Things platform under the product.
         * <p>
         * Optional:
         * secret: using a device key for device authentication.
         * Details can be found MQTT-TCP connection communication.
         * id2: Use things device authentication ID.
         * x509: X.509 certificates using the device for device authentication.
         * The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
         * If this parameter is passed, the default value is secret.
         * <p>
         * @return {@code this}
         * @param authType Property authType: Authentication device to access the Internet of Things platform under the product. This parameter is required.
         */
        public Builder authType(final java.lang.String authType) {
            this.props.authType(authType);
            return this;
        }
        /**
         * Property authType: Authentication device to access the Internet of Things platform under the product.
         * <p>
         * Optional:
         * secret: using a device key for device authentication.
         * Details can be found MQTT-TCP connection communication.
         * id2: Use things device authentication ID.
         * x509: X.509 certificates using the device for device authentication.
         * The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
         * If this parameter is passed, the default value is secret.
         * <p>
         * @return {@code this}
         * @param authType Property authType: Authentication device to access the Internet of Things platform under the product. This parameter is required.
         */
        public Builder authType(final com.aliyun.ros.cdk.core.IResolvable authType) {
            this.props.authType(authType);
            return this;
        }

        /**
         * Property categoryKey: Identifier Product category.
         * <p>
         * If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
         * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
         * <p>
         * @return {@code this}
         * @param categoryKey Property categoryKey: Identifier Product category. This parameter is required.
         */
        public Builder categoryKey(final java.lang.String categoryKey) {
            this.props.categoryKey(categoryKey);
            return this;
        }
        /**
         * Property categoryKey: Identifier Product category.
         * <p>
         * If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
         * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
         * <p>
         * @return {@code this}
         * @param categoryKey Property categoryKey: Identifier Product category. This parameter is required.
         */
        public Builder categoryKey(final com.aliyun.ros.cdk.core.IResolvable categoryKey) {
            this.props.categoryKey(categoryKey);
            return this;
        }

        /**
         * Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
         * <p>
         * This parameter is only available and required when you create a Pro Edition product.
         * Options:
         * 0: Do not parse/Custom.
         * 1: Alink JSON.
         * <p>
         * @return {@code this}
         * @param dataFormat Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior. This parameter is required.
         */
        public Builder dataFormat(final java.lang.Number dataFormat) {
            this.props.dataFormat(dataFormat);
            return this;
        }
        /**
         * Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
         * <p>
         * This parameter is only available and required when you create a Pro Edition product.
         * Options:
         * 0: Do not parse/Custom.
         * 1: Alink JSON.
         * <p>
         * @return {@code this}
         * @param dataFormat Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior. This parameter is required.
         */
        public Builder dataFormat(final com.aliyun.ros.cdk.core.IResolvable dataFormat) {
            this.props.dataFormat(dataFormat);
            return this;
        }

        /**
         * Property description: A description of the product.
         * <p>
         * The description can be a maximum of 100 characters in
         * length.
         * <p>
         * @return {@code this}
         * @param description Property description: A description of the product. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: A description of the product.
         * <p>
         * The description can be a maximum of 100 characters in
         * length.
         * <p>
         * @return {@code this}
         * @param description Property description: A description of the product. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property id2: Whether ID2 certification.
         * <p>
         * Optional values:
         * true: the opening of ID2 certification.
         * false: do not open ID2 certification.
         * Do not pass this parameter, the default is not opened.
         * Explanation
         * Only 2 East China (Shanghai) regional support ID2 authentication.
         * If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
         * <p>
         * @return {@code this}
         * @param id2 Property id2: Whether ID2 certification. This parameter is required.
         */
        public Builder id2(final java.lang.Boolean id2) {
            this.props.id2(id2);
            return this;
        }
        /**
         * Property id2: Whether ID2 certification.
         * <p>
         * Optional values:
         * true: the opening of ID2 certification.
         * false: do not open ID2 certification.
         * Do not pass this parameter, the default is not opened.
         * Explanation
         * Only 2 East China (Shanghai) regional support ID2 authentication.
         * If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
         * <p>
         * @return {@code this}
         * @param id2 Property id2: Whether ID2 certification. This parameter is required.
         */
        public Builder id2(final com.aliyun.ros.cdk.core.IResolvable id2) {
            this.props.id2(id2);
            return this;
        }

        /**
         * Property iotInstanceId: Public instance does not pass this parameter;
         * <p>
         * instance that you need to buy the incoming instance ID.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;. This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * Property iotInstanceId: Public instance does not pass this parameter;
         * <p>
         * instance that you need to buy the incoming instance ID.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;. This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * Property joinPermissionId: LoRaWAN network credential ID.
         * <p>
         * When networking mode NetType chosen LORA, the necessary parameters.
         * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
         * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
         * <p>
         * @return {@code this}
         * @param joinPermissionId Property joinPermissionId: LoRaWAN network credential ID. This parameter is required.
         */
        public Builder joinPermissionId(final java.lang.String joinPermissionId) {
            this.props.joinPermissionId(joinPermissionId);
            return this;
        }
        /**
         * Property joinPermissionId: LoRaWAN network credential ID.
         * <p>
         * When networking mode NetType chosen LORA, the necessary parameters.
         * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
         * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
         * <p>
         * @return {@code this}
         * @param joinPermissionId Property joinPermissionId: LoRaWAN network credential ID. This parameter is required.
         */
        public Builder joinPermissionId(final com.aliyun.ros.cdk.core.IResolvable joinPermissionId) {
            this.props.joinPermissionId(joinPermissionId);
            return this;
        }

        /**
         * Property netType: Networking mode.
         * <p>
         * Set this parameter only if you are creating a product whose devices directly connect
         * to IoT Platform.
         * Options:
         * WIFI
         * CELLULAR
         * ETHERNET
         * OTHER
         * The default value is WIFI.
         * <p>
         * @return {@code this}
         * @param netType Property netType: Networking mode. This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }
        /**
         * Property netType: Networking mode.
         * <p>
         * Set this parameter only if you are creating a product whose devices directly connect
         * to IoT Platform.
         * Options:
         * WIFI
         * CELLULAR
         * ETHERNET
         * OTHER
         * The default value is WIFI.
         * <p>
         * @return {@code this}
         * @param netType Property netType: Networking mode. This parameter is required.
         */
        public Builder netType(final com.aliyun.ros.cdk.core.IResolvable netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * Property protocolType: The protocol that devices of this product use to connect to gateways.
         * <p>
         * Set this parameter only if you are creating a product whose devices will be connected
         * to gateways.
         * Options:
         * modbus: Modbus.
         * opc-ua: OPC UA.
         * customize: Customized protocol.
         * ble: BLE.
         * zigbee: ZigBee.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: The protocol that devices of this product use to connect to gateways. This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * Property protocolType: The protocol that devices of this product use to connect to gateways.
         * <p>
         * Set this parameter only if you are creating a product whose devices will be connected
         * to gateways.
         * Options:
         * modbus: Modbus.
         * opc-ua: OPC UA.
         * customize: Customized protocol.
         * ble: BLE.
         * zigbee: ZigBee.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: The protocol that devices of this product use to connect to gateways. This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * Property publishAuto: Whether to automatically model publication after the product is created.
         * <p>
         * true: publishing.
         * false: not released.
         * This parameter is not passed, the default value true.
         * <p>
         * @return {@code this}
         * @param publishAuto Property publishAuto: Whether to automatically model publication after the product is created. This parameter is required.
         */
        public Builder publishAuto(final java.lang.Boolean publishAuto) {
            this.props.publishAuto(publishAuto);
            return this;
        }
        /**
         * Property publishAuto: Whether to automatically model publication after the product is created.
         * <p>
         * true: publishing.
         * false: not released.
         * This parameter is not passed, the default value true.
         * <p>
         * @return {@code this}
         * @param publishAuto Property publishAuto: Whether to automatically model publication after the product is created. This parameter is required.
         */
        public Builder publishAuto(final com.aliyun.ros.cdk.core.IResolvable publishAuto) {
            this.props.publishAuto(publishAuto);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
         * <p>
         * If this parameter is passed, the product will be classified as a default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
         * <p>
         * If this parameter is passed, the product will be classified as a default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.iot.Product}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.Product build() {
            return new com.aliyun.ros.cdk.iot.Product(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
