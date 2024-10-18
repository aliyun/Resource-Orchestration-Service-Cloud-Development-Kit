package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a <code>RosProduct</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-product
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:31.252Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosProductProps")
@software.amazon.jsii.Jsii.Proxy(RosProductProps.Jsii$Proxy.class)
public interface RosProductProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAliyunCommodityCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategoryKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataFormat() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getId2() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJoinPermissionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtocolType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublishAuto() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosProductProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosProductProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosProductProps> {
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
         * Sets the value of {@link RosProductProps#getNodeType}
         * @param nodeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeType(java.lang.Number nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getNodeType}
         * @param nodeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeType(com.aliyun.ros.cdk.core.IResolvable nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getProductName}
         * @param productName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productName(java.lang.String productName) {
            this.productName = productName;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getProductName}
         * @param productName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productName(com.aliyun.ros.cdk.core.IResolvable productName) {
            this.productName = productName;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getAliyunCommodityCode}
         * @param aliyunCommodityCode the value to be set.
         * @return {@code this}
         */
        public Builder aliyunCommodityCode(java.lang.String aliyunCommodityCode) {
            this.aliyunCommodityCode = aliyunCommodityCode;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getAliyunCommodityCode}
         * @param aliyunCommodityCode the value to be set.
         * @return {@code this}
         */
        public Builder aliyunCommodityCode(com.aliyun.ros.cdk.core.IResolvable aliyunCommodityCode) {
            this.aliyunCommodityCode = aliyunCommodityCode;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getAuthType}
         * @param authType the value to be set.
         * @return {@code this}
         */
        public Builder authType(java.lang.String authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getAuthType}
         * @param authType the value to be set.
         * @return {@code this}
         */
        public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getCategoryKey}
         * @param categoryKey the value to be set.
         * @return {@code this}
         */
        public Builder categoryKey(java.lang.String categoryKey) {
            this.categoryKey = categoryKey;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getCategoryKey}
         * @param categoryKey the value to be set.
         * @return {@code this}
         */
        public Builder categoryKey(com.aliyun.ros.cdk.core.IResolvable categoryKey) {
            this.categoryKey = categoryKey;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getDataFormat}
         * @param dataFormat the value to be set.
         * @return {@code this}
         */
        public Builder dataFormat(java.lang.Number dataFormat) {
            this.dataFormat = dataFormat;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getDataFormat}
         * @param dataFormat the value to be set.
         * @return {@code this}
         */
        public Builder dataFormat(com.aliyun.ros.cdk.core.IResolvable dataFormat) {
            this.dataFormat = dataFormat;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getId2}
         * @param id2 the value to be set.
         * @return {@code this}
         */
        public Builder id2(java.lang.Boolean id2) {
            this.id2 = id2;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getId2}
         * @param id2 the value to be set.
         * @return {@code this}
         */
        public Builder id2(com.aliyun.ros.cdk.core.IResolvable id2) {
            this.id2 = id2;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getJoinPermissionId}
         * @param joinPermissionId the value to be set.
         * @return {@code this}
         */
        public Builder joinPermissionId(java.lang.String joinPermissionId) {
            this.joinPermissionId = joinPermissionId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getJoinPermissionId}
         * @param joinPermissionId the value to be set.
         * @return {@code this}
         */
        public Builder joinPermissionId(com.aliyun.ros.cdk.core.IResolvable joinPermissionId) {
            this.joinPermissionId = joinPermissionId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getNetType}
         * @param netType the value to be set.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getNetType}
         * @param netType the value to be set.
         * @return {@code this}
         */
        public Builder netType(com.aliyun.ros.cdk.core.IResolvable netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getProtocolType}
         * @param protocolType the value to be set.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getProtocolType}
         * @param protocolType the value to be set.
         * @return {@code this}
         */
        public Builder protocolType(com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getPublishAuto}
         * @param publishAuto the value to be set.
         * @return {@code this}
         */
        public Builder publishAuto(java.lang.Boolean publishAuto) {
            this.publishAuto = publishAuto;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getPublishAuto}
         * @param publishAuto the value to be set.
         * @return {@code this}
         */
        public Builder publishAuto(com.aliyun.ros.cdk.core.IResolvable publishAuto) {
            this.publishAuto = publishAuto;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosProductProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosProductProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosProductProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosProductProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.RosProductProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosProductProps.Jsii$Proxy that = (RosProductProps.Jsii$Proxy) o;

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
