package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a `ALIYUN::IOT::Product`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.033Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.ProductProps")
@software.amazon.jsii.Jsii.Proxy(ProductProps.Jsii$Proxy.class)
public interface ProductProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getNodeType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProductName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAliyunCommodityCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAuthType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCategoryKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getDataFormat() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getId2() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIotInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getJoinPermissionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNetType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getProtocolType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublishAuto() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
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
        private java.lang.Number nodeType;
        private java.lang.String productName;
        private java.lang.String aliyunCommodityCode;
        private java.lang.String authType;
        private java.lang.String categoryKey;
        private java.lang.Number dataFormat;
        private java.lang.String description;
        private java.lang.Object id2;
        private java.lang.String iotInstanceId;
        private java.lang.String joinPermissionId;
        private java.lang.String netType;
        private java.lang.String protocolType;
        private java.lang.Object publishAuto;
        private java.lang.String resourceGroupId;

        /**
         * Sets the value of {@link ProductProps#getNodeType}
         * @param nodeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeType(java.lang.Number nodeType) {
            this.nodeType = nodeType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getProductName}
         * @param productName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productName(java.lang.String productName) {
            this.productName = productName;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getAliyunCommodityCode}
         * @param aliyunCommodityCode the value to be set.
         * @return {@code this}
         */
        public Builder aliyunCommodityCode(java.lang.String aliyunCommodityCode) {
            this.aliyunCommodityCode = aliyunCommodityCode;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getAuthType}
         * @param authType the value to be set.
         * @return {@code this}
         */
        public Builder authType(java.lang.String authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getCategoryKey}
         * @param categoryKey the value to be set.
         * @return {@code this}
         */
        public Builder categoryKey(java.lang.String categoryKey) {
            this.categoryKey = categoryKey;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getDataFormat}
         * @param dataFormat the value to be set.
         * @return {@code this}
         */
        public Builder dataFormat(java.lang.Number dataFormat) {
            this.dataFormat = dataFormat;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getId2}
         * @param id2 the value to be set.
         * @return {@code this}
         */
        public Builder id2(java.lang.Boolean id2) {
            this.id2 = id2;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getId2}
         * @param id2 the value to be set.
         * @return {@code this}
         */
        public Builder id2(com.aliyun.ros.cdk.core.IResolvable id2) {
            this.id2 = id2;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getJoinPermissionId}
         * @param joinPermissionId the value to be set.
         * @return {@code this}
         */
        public Builder joinPermissionId(java.lang.String joinPermissionId) {
            this.joinPermissionId = joinPermissionId;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getNetType}
         * @param netType the value to be set.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getProtocolType}
         * @param protocolType the value to be set.
         * @return {@code this}
         */
        public Builder protocolType(java.lang.String protocolType) {
            this.protocolType = protocolType;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getPublishAuto}
         * @param publishAuto the value to be set.
         * @return {@code this}
         */
        public Builder publishAuto(java.lang.Boolean publishAuto) {
            this.publishAuto = publishAuto;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getPublishAuto}
         * @param publishAuto the value to be set.
         * @return {@code this}
         */
        public Builder publishAuto(com.aliyun.ros.cdk.core.IResolvable publishAuto) {
            this.publishAuto = publishAuto;
            return this;
        }

        /**
         * Sets the value of {@link ProductProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
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
            return new Jsii$Proxy(nodeType, productName, aliyunCommodityCode, authType, categoryKey, dataFormat, description, id2, iotInstanceId, joinPermissionId, netType, protocolType, publishAuto, resourceGroupId);
        }
    }

    /**
     * An implementation for {@link ProductProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProductProps {
        private final java.lang.Number nodeType;
        private final java.lang.String productName;
        private final java.lang.String aliyunCommodityCode;
        private final java.lang.String authType;
        private final java.lang.String categoryKey;
        private final java.lang.Number dataFormat;
        private final java.lang.String description;
        private final java.lang.Object id2;
        private final java.lang.String iotInstanceId;
        private final java.lang.String joinPermissionId;
        private final java.lang.String netType;
        private final java.lang.String protocolType;
        private final java.lang.Object publishAuto;
        private final java.lang.String resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.nodeType = software.amazon.jsii.Kernel.get(this, "nodeType", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.productName = software.amazon.jsii.Kernel.get(this, "productName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.aliyunCommodityCode = software.amazon.jsii.Kernel.get(this, "aliyunCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.authType = software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.categoryKey = software.amazon.jsii.Kernel.get(this, "categoryKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dataFormat = software.amazon.jsii.Kernel.get(this, "dataFormat", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.id2 = software.amazon.jsii.Kernel.get(this, "id2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.joinPermissionId = software.amazon.jsii.Kernel.get(this, "joinPermissionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.netType = software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.protocolType = software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.publishAuto = software.amazon.jsii.Kernel.get(this, "publishAuto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number nodeType, final java.lang.String productName, final java.lang.String aliyunCommodityCode, final java.lang.String authType, final java.lang.String categoryKey, final java.lang.Number dataFormat, final java.lang.String description, final java.lang.Object id2, final java.lang.String iotInstanceId, final java.lang.String joinPermissionId, final java.lang.String netType, final java.lang.String protocolType, final java.lang.Object publishAuto, final java.lang.String resourceGroupId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.nodeType = java.util.Objects.requireNonNull(nodeType, "nodeType is required");
            this.productName = java.util.Objects.requireNonNull(productName, "productName is required");
            this.aliyunCommodityCode = aliyunCommodityCode;
            this.authType = authType;
            this.categoryKey = categoryKey;
            this.dataFormat = dataFormat;
            this.description = description;
            this.id2 = id2;
            this.iotInstanceId = iotInstanceId;
            this.joinPermissionId = joinPermissionId;
            this.netType = netType;
            this.protocolType = protocolType;
            this.publishAuto = publishAuto;
            this.resourceGroupId = resourceGroupId;
        }

        @Override
        public final java.lang.Number getNodeType() {
            return this.nodeType;
        }

        @Override
        public final java.lang.String getProductName() {
            return this.productName;
        }

        @Override
        public final java.lang.String getAliyunCommodityCode() {
            return this.aliyunCommodityCode;
        }

        @Override
        public final java.lang.String getAuthType() {
            return this.authType;
        }

        @Override
        public final java.lang.String getCategoryKey() {
            return this.categoryKey;
        }

        @Override
        public final java.lang.Number getDataFormat() {
            return this.dataFormat;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getId2() {
            return this.id2;
        }

        @Override
        public final java.lang.String getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        public final java.lang.String getJoinPermissionId() {
            return this.joinPermissionId;
        }

        @Override
        public final java.lang.String getNetType() {
            return this.netType;
        }

        @Override
        public final java.lang.String getProtocolType() {
            return this.protocolType;
        }

        @Override
        public final java.lang.Object getPublishAuto() {
            return this.publishAuto;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
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
