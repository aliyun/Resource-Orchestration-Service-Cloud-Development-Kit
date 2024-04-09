package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a <code>Product</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-product
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:33.481Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.ProductProps")
@software.amazon.jsii.Jsii.Proxy(ProductProps.Jsii$Proxy.class)
public interface ProductProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property nodeType: The node type of the product.
     * <p>
     * Values:
     * 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
     * either directly or as a sub-device of a gateway.
     * 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
     * the topological relationships with sub-devices, and synchronize the topological relationships
     * to IoT Platform.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeType();

    /**
     * Property productName: The name of the product.
     * <p>
     * A product name can be 4 to 30 characters in length and can
     * contain Chinese characters, English letters, digits, and underscores (_).
     * Note A product name must be unique in an account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductName();

    /**
     * Property aliyunCommodityCode: The edition of the product that you want to create.
     * <p>
     * There are two options:
     * iothub_senior: Pro Edition.
     * iothub: Basic Edition.
     * If you do not input this parameter, the default value is used, which is iothub (Basic
     * Edition).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAliyunCommodityCode() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
        return null;
    }

    /**
     * Property categoryKey: Identifier Product category.
     * <p>
     * If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
     * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategoryKey() {
        return null;
    }

    /**
     * Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
     * <p>
     * This parameter is only available and required when you create a Pro Edition product.
     * Options:
     * 0: Do not parse/Custom.
     * 1: Alink JSON.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataFormat() {
        return null;
    }

    /**
     * Property description: A description of the product.
     * <p>
     * The description can be a maximum of 100 characters in
     * length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getId2() {
        return null;
    }

    /**
     * Property iotInstanceId: Public instance does not pass this parameter;
     * <p>
     * instance that you need to buy the incoming instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     * Property joinPermissionId: LoRaWAN network credential ID.
     * <p>
     * When networking mode NetType chosen LORA, the necessary parameters.
     * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
     * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJoinPermissionId() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetType() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtocolType() {
        return null;
    }

    /**
     * Property publishAuto: Whether to automatically model publication after the product is created.
     * <p>
     * true: publishing.
     * false: not released.
     * This parameter is not passed, the default value true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublishAuto() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
     * <p>
     * If this parameter is passed, the product will be classified as a default resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ProductProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ProductProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ProductProps> {
        java.lang.Object nodeType;
        java.lang.Object productName;
        java.lang.Object aliyunCommodityCode;
        java.lang.Object authType;
        java.lang.Object categoryKey;
        java.lang.Object dataFormat;
        java.lang.Object description;
        java.lang.Object id2;
        java.lang.Object iotInstanceId;
        java.lang.Object joinPermissionId;
        java.lang.Object netType;
        java.lang.Object protocolType;
        java.lang.Object publishAuto;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link ProductProps#getNodeType}
         * @param nodeType Property nodeType: The node type of the product. This parameter is required.
         *                 Values:
         *                 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
         *                 either directly or as a sub-device of a gateway.
         *                 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
         *                 the topological relationships with sub-devices, and synchronize the topological relationships
         *                 to IoT Platform.
         * @return {@code this}
         */
        public Builder nodeType(java.lang.Number nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getNodeType}
         * @param nodeType Property nodeType: The node type of the product. This parameter is required.
         *                 Values:
         *                 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
         *                 either directly or as a sub-device of a gateway.
         *                 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
         *                 the topological relationships with sub-devices, and synchronize the topological relationships
         *                 to IoT Platform.
         * @return {@code this}
         */
        public Builder nodeType(com.aliyun.ros.cdk.core.IResolvable nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getProductName}
         * @param productName Property productName: The name of the product. This parameter is required.
         *                    A product name can be 4 to 30 characters in length and can
         *                    contain Chinese characters, English letters, digits, and underscores (_).
         *                    Note A product name must be unique in an account.
         * @return {@code this}
         */
        public Builder productName(java.lang.String productName) {
            this.productName = productName;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getProductName}
         * @param productName Property productName: The name of the product. This parameter is required.
         *                    A product name can be 4 to 30 characters in length and can
         *                    contain Chinese characters, English letters, digits, and underscores (_).
         *                    Note A product name must be unique in an account.
         * @return {@code this}
         */
        public Builder productName(com.aliyun.ros.cdk.core.IResolvable productName) {
            this.productName = productName;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getAliyunCommodityCode}
         * @param aliyunCommodityCode Property aliyunCommodityCode: The edition of the product that you want to create.
         *                            There are two options:
         *                            iothub_senior: Pro Edition.
         *                            iothub: Basic Edition.
         *                            If you do not input this parameter, the default value is used, which is iothub (Basic
         *                            Edition).
         * @return {@code this}
         */
        public Builder aliyunCommodityCode(java.lang.String aliyunCommodityCode) {
            this.aliyunCommodityCode = aliyunCommodityCode;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getAliyunCommodityCode}
         * @param aliyunCommodityCode Property aliyunCommodityCode: The edition of the product that you want to create.
         *                            There are two options:
         *                            iothub_senior: Pro Edition.
         *                            iothub: Basic Edition.
         *                            If you do not input this parameter, the default value is used, which is iothub (Basic
         *                            Edition).
         * @return {@code this}
         */
        public Builder aliyunCommodityCode(com.aliyun.ros.cdk.core.IResolvable aliyunCommodityCode) {
            this.aliyunCommodityCode = aliyunCommodityCode;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getAuthType}
         * @param authType Property authType: Authentication device to access the Internet of Things platform under the product.
         *                 Optional:
         *                 secret: using a device key for device authentication.
         *                 Details can be found MQTT-TCP connection communication.
         *                 id2: Use things device authentication ID.
         *                 x509: X.509 certificates using the device for device authentication.
         *                 The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
         *                 If this parameter is passed, the default value is secret.
         * @return {@code this}
         */
        public Builder authType(java.lang.String authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getAuthType}
         * @param authType Property authType: Authentication device to access the Internet of Things platform under the product.
         *                 Optional:
         *                 secret: using a device key for device authentication.
         *                 Details can be found MQTT-TCP connection communication.
         *                 id2: Use things device authentication ID.
         *                 x509: X.509 certificates using the device for device authentication.
         *                 The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
         *                 If this parameter is passed, the default value is secret.
         * @return {@code this}
         */
        public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getCategoryKey}
         * @param categoryKey Property categoryKey: Identifier Product category.
         *                    If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
         *                    Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
         * @return {@code this}
         */
        public Builder categoryKey(java.lang.String categoryKey) {
            this.categoryKey = categoryKey;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getCategoryKey}
         * @param categoryKey Property categoryKey: Identifier Product category.
         *                    If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
         *                    Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
         * @return {@code this}
         */
        public Builder categoryKey(com.aliyun.ros.cdk.core.IResolvable categoryKey) {
            this.categoryKey = categoryKey;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getDataFormat}
         * @param dataFormat Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
         *                   This parameter is only available and required when you create a Pro Edition product.
         *                   Options:
         *                   0: Do not parse/Custom.
         *                   1: Alink JSON.
         * @return {@code this}
         */
        public Builder dataFormat(java.lang.Number dataFormat) {
            this.dataFormat = dataFormat;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getDataFormat}
         * @param dataFormat Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
         *                   This parameter is only available and required when you create a Pro Edition product.
         *                   Options:
         *                   0: Do not parse/Custom.
         *                   1: Alink JSON.
         * @return {@code this}
         */
        public Builder dataFormat(com.aliyun.ros.cdk.core.IResolvable dataFormat) {
            this.dataFormat = dataFormat;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getDescription}
         * @param description Property description: A description of the product.
         *                    The description can be a maximum of 100 characters in
         *                    length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getDescription}
         * @param description Property description: A description of the product.
         *                    The description can be a maximum of 100 characters in
         *                    length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getId2}
         * @param id2 Property id2: Whether ID2 certification.
         *            Optional values:
         *            true: the opening of ID2 certification.
         *            false: do not open ID2 certification.
         *            Do not pass this parameter, the default is not opened.
         *            Explanation
         *            Only 2 East China (Shanghai) regional support ID2 authentication.
         *            If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
         * @return {@code this}
         */
        public Builder id2(java.lang.Boolean id2) {
            this.id2 = id2;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getId2}
         * @param id2 Property id2: Whether ID2 certification.
         *            Optional values:
         *            true: the opening of ID2 certification.
         *            false: do not open ID2 certification.
         *            Do not pass this parameter, the default is not opened.
         *            Explanation
         *            Only 2 East China (Shanghai) regional support ID2 authentication.
         *            If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
         * @return {@code this}
         */
        public Builder id2(com.aliyun.ros.cdk.core.IResolvable id2) {
            this.id2 = id2;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;.
         *                      instance that you need to buy the incoming instance ID.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;.
         *                      instance that you need to buy the incoming instance ID.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getJoinPermissionId}
         * @param joinPermissionId Property joinPermissionId: LoRaWAN network credential ID.
         *                         When networking mode NetType chosen LORA, the necessary parameters.
         *                         Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
         *                         If you do not LoRaWAN network credentials, visit the network management platform to create things together.
         * @return {@code this}
         */
        public Builder joinPermissionId(java.lang.String joinPermissionId) {
            this.joinPermissionId = joinPermissionId;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getJoinPermissionId}
         * @param joinPermissionId Property joinPermissionId: LoRaWAN network credential ID.
         *                         When networking mode NetType chosen LORA, the necessary parameters.
         *                         Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
         *                         If you do not LoRaWAN network credentials, visit the network management platform to create things together.
         * @return {@code this}
         */
        public Builder joinPermissionId(com.aliyun.ros.cdk.core.IResolvable joinPermissionId) {
            this.joinPermissionId = joinPermissionId;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getNetType}
         * @param netType Property netType: Networking mode.
         *                Set this parameter only if you are creating a product whose devices directly connect
         *                to IoT Platform.
         *                Options:
         *                WIFI
         *                CELLULAR
         *                ETHERNET
         *                OTHER
         *                The default value is WIFI.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getNetType}
         * @param netType Property netType: Networking mode.
         *                Set this parameter only if you are creating a product whose devices directly connect
         *                to IoT Platform.
         *                Options:
         *                WIFI
         *                CELLULAR
         *                ETHERNET
         *                OTHER
         *                The default value is WIFI.
         * @return {@code this}
         */
        public Builder netType(com.aliyun.ros.cdk.core.IResolvable netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getProtocolType}
         * @param protocolType Property protocolType: The protocol that devices of this product use to connect to gateways.
         *                     Set this parameter only if you are creating a product whose devices will be connected
         *                     to gateways.
         *                     Options:
         *                     modbus: Modbus.
         *                     opc-ua: OPC UA.
         *                     customize: Customized protocol.
         *                     ble: BLE.
         *                     zigbee: ZigBee.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getProtocolType}
         * @param protocolType Property protocolType: The protocol that devices of this product use to connect to gateways.
         *                     Set this parameter only if you are creating a product whose devices will be connected
         *                     to gateways.
         *                     Options:
         *                     modbus: Modbus.
         *                     opc-ua: OPC UA.
         *                     customize: Customized protocol.
         *                     ble: BLE.
         *                     zigbee: ZigBee.
         * @return {@code this}
         */
        public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getPublishAuto}
         * @param publishAuto Property publishAuto: Whether to automatically model publication after the product is created.
         *                    true: publishing.
         *                    false: not released.
         *                    This parameter is not passed, the default value true.
         * @return {@code this}
         */
        public Builder publishAuto(java.lang.Boolean publishAuto) {
            this.publishAuto = publishAuto;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getPublishAuto}
         * @param publishAuto Property publishAuto: Whether to automatically model publication after the product is created.
         *                    true: publishing.
         *                    false: not released.
         *                    This parameter is not passed, the default value true.
         * @return {@code this}
         */
        public Builder publishAuto(com.aliyun.ros.cdk.core.IResolvable publishAuto) {
            this.publishAuto = publishAuto;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
         *                        If this parameter is passed, the product will be classified as a default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
         *                        If this parameter is passed, the product will be classified as a default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ProductProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ProductProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ProductProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProductProps {
        private final java.lang.Object nodeType;
        private final java.lang.Object productName;
        private final java.lang.Object aliyunCommodityCode;
        private final java.lang.Object authType;
        private final java.lang.Object categoryKey;
        private final java.lang.Object dataFormat;
        private final java.lang.Object description;
        private final java.lang.Object id2;
        private final java.lang.Object iotInstanceId;
        private final java.lang.Object joinPermissionId;
        private final java.lang.Object netType;
        private final java.lang.Object protocolType;
        private final java.lang.Object publishAuto;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.nodeType = software.amazon.jsii.Kernel.get(this, "nodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productName = software.amazon.jsii.Kernel.get(this, "productName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aliyunCommodityCode = software.amazon.jsii.Kernel.get(this, "aliyunCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authType = software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.categoryKey = software.amazon.jsii.Kernel.get(this, "categoryKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataFormat = software.amazon.jsii.Kernel.get(this, "dataFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.id2 = software.amazon.jsii.Kernel.get(this, "id2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.joinPermissionId = software.amazon.jsii.Kernel.get(this, "joinPermissionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.netType = software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publishAuto = software.amazon.jsii.Kernel.get(this, "publishAuto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.nodeType = java.util.Objects.requireNonNull(builder.nodeType, "nodeType is required");
            this.productName = java.util.Objects.requireNonNull(builder.productName, "productName is required");
            this.aliyunCommodityCode = builder.aliyunCommodityCode;
            this.authType = builder.authType;
            this.categoryKey = builder.categoryKey;
            this.dataFormat = builder.dataFormat;
            this.description = builder.description;
            this.id2 = builder.id2;
            this.iotInstanceId = builder.iotInstanceId;
            this.joinPermissionId = builder.joinPermissionId;
            this.netType = builder.netType;
            this.protocolType = builder.protocolType;
            this.publishAuto = builder.publishAuto;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getNodeType() {
            return this.nodeType;
        }

        @Override
        public final java.lang.Object getProductName() {
            return this.productName;
        }

        @Override
        public final java.lang.Object getAliyunCommodityCode() {
            return this.aliyunCommodityCode;
        }

        @Override
        public final java.lang.Object getAuthType() {
            return this.authType;
        }

        @Override
        public final java.lang.Object getCategoryKey() {
            return this.categoryKey;
        }

        @Override
        public final java.lang.Object getDataFormat() {
            return this.dataFormat;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getId2() {
            return this.id2;
        }

        @Override
        public final java.lang.Object getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        public final java.lang.Object getJoinPermissionId() {
            return this.joinPermissionId;
        }

        @Override
        public final java.lang.Object getNetType() {
            return this.netType;
        }

        @Override
        public final java.lang.Object getProtocolType() {
            return this.protocolType;
        }

        @Override
        public final java.lang.Object getPublishAuto() {
            return this.publishAuto;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("nodeType", om.valueToTree(this.getNodeType()));
            data.set("productName", om.valueToTree(this.getProductName()));
            if (this.getAliyunCommodityCode() != null) {
                data.set("aliyunCommodityCode", om.valueToTree(this.getAliyunCommodityCode()));
            }
            if (this.getAuthType() != null) {
                data.set("authType", om.valueToTree(this.getAuthType()));
            }
            if (this.getCategoryKey() != null) {
                data.set("categoryKey", om.valueToTree(this.getCategoryKey()));
            }
            if (this.getDataFormat() != null) {
                data.set("dataFormat", om.valueToTree(this.getDataFormat()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getId2() != null) {
                data.set("id2", om.valueToTree(this.getId2()));
            }
            if (this.getIotInstanceId() != null) {
                data.set("iotInstanceId", om.valueToTree(this.getIotInstanceId()));
            }
            if (this.getJoinPermissionId() != null) {
                data.set("joinPermissionId", om.valueToTree(this.getJoinPermissionId()));
            }
            if (this.getNetType() != null) {
                data.set("netType", om.valueToTree(this.getNetType()));
            }
            if (this.getProtocolType() != null) {
                data.set("protocolType", om.valueToTree(this.getProtocolType()));
            }
            if (this.getPublishAuto() != null) {
                data.set("publishAuto", om.valueToTree(this.getPublishAuto()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.ProductProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ProductProps.Jsii$Proxy that = (ProductProps.Jsii$Proxy) o;

            if (!nodeType.equals(that.nodeType)) return false;
            if (!productName.equals(that.productName)) return false;
            if (this.aliyunCommodityCode != null ? !this.aliyunCommodityCode.equals(that.aliyunCommodityCode) : that.aliyunCommodityCode != null) return false;
            if (this.authType != null ? !this.authType.equals(that.authType) : that.authType != null) return false;
            if (this.categoryKey != null ? !this.categoryKey.equals(that.categoryKey) : that.categoryKey != null) return false;
            if (this.dataFormat != null ? !this.dataFormat.equals(that.dataFormat) : that.dataFormat != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.id2 != null ? !this.id2.equals(that.id2) : that.id2 != null) return false;
            if (this.iotInstanceId != null ? !this.iotInstanceId.equals(that.iotInstanceId) : that.iotInstanceId != null) return false;
            if (this.joinPermissionId != null ? !this.joinPermissionId.equals(that.joinPermissionId) : that.joinPermissionId != null) return false;
            if (this.netType != null ? !this.netType.equals(that.netType) : that.netType != null) return false;
            if (this.protocolType != null ? !this.protocolType.equals(that.protocolType) : that.protocolType != null) return false;
            if (this.publishAuto != null ? !this.publishAuto.equals(that.publishAuto) : that.publishAuto != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.nodeType.hashCode();
            result = 31 * result + (this.productName.hashCode());
            result = 31 * result + (this.aliyunCommodityCode != null ? this.aliyunCommodityCode.hashCode() : 0);
            result = 31 * result + (this.authType != null ? this.authType.hashCode() : 0);
            result = 31 * result + (this.categoryKey != null ? this.categoryKey.hashCode() : 0);
            result = 31 * result + (this.dataFormat != null ? this.dataFormat.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.id2 != null ? this.id2.hashCode() : 0);
            result = 31 * result + (this.iotInstanceId != null ? this.iotInstanceId.hashCode() : 0);
            result = 31 * result + (this.joinPermissionId != null ? this.joinPermissionId.hashCode() : 0);
            result = 31 * result + (this.netType != null ? this.netType.hashCode() : 0);
            result = 31 * result + (this.protocolType != null ? this.protocolType.hashCode() : 0);
            result = 31 * result + (this.publishAuto != null ? this.publishAuto.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
