package com.aliyun.ros.cdk.iot;

/**
 * A ROS template type:  `ALIYUN::IOT::Product`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.036Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosProduct")
public class RosProduct extends com.aliyun.ros.cdk.core.RosResource {

    protected RosProduct(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosProduct(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.iot.RosProduct.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::IOT::Product`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosProduct(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.RosProductProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductKey() {
        return software.amazon.jsii.Kernel.get(this, "attrProductKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Number getNodeType() {
        return software.amazon.jsii.Kernel.get(this, "nodeType", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setNodeType(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "nodeType", java.util.Objects.requireNonNull(value, "nodeType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getProductName() {
        return software.amazon.jsii.Kernel.get(this, "productName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setProductName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productName", java.util.Objects.requireNonNull(value, "productName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAliyunCommodityCode() {
        return software.amazon.jsii.Kernel.get(this, "aliyunCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAliyunCommodityCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aliyunCommodityCode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAuthType() {
        return software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAuthType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getCategoryKey() {
        return software.amazon.jsii.Kernel.get(this, "categoryKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setCategoryKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "categoryKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getDataFormat() {
        return software.amazon.jsii.Kernel.get(this, "dataFormat", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setDataFormat(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dataFormat", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getId2() {
        return software.amazon.jsii.Kernel.get(this, "id2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setId2(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "id2", value);
    }

    /**
     */
    public void setId2(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "id2", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setIotInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "iotInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getJoinPermissionId() {
        return software.amazon.jsii.Kernel.get(this, "joinPermissionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setJoinPermissionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "joinPermissionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getNetType() {
        return software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setNetType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "netType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getProtocolType() {
        return software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setProtocolType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocolType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPublishAuto() {
        return software.amazon.jsii.Kernel.get(this, "publishAuto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPublishAuto(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "publishAuto", value);
    }

    /**
     */
    public void setPublishAuto(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "publishAuto", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.RosProduct}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.RosProduct> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.iot.RosProductProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.RosProductProps.Builder();
        }

        /**
         * @return {@code this}
         * @param nodeType This parameter is required.
         */
        public Builder nodeType(final java.lang.Number nodeType) {
            this.props.nodeType(nodeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param productName This parameter is required.
         */
        public Builder productName(final java.lang.String productName) {
            this.props.productName(productName);
            return this;
        }

        /**
         * @return {@code this}
         * @param aliyunCommodityCode This parameter is required.
         */
        public Builder aliyunCommodityCode(final java.lang.String aliyunCommodityCode) {
            this.props.aliyunCommodityCode(aliyunCommodityCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param authType This parameter is required.
         */
        public Builder authType(final java.lang.String authType) {
            this.props.authType(authType);
            return this;
        }

        /**
         * @return {@code this}
         * @param categoryKey This parameter is required.
         */
        public Builder categoryKey(final java.lang.String categoryKey) {
            this.props.categoryKey(categoryKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataFormat This parameter is required.
         */
        public Builder dataFormat(final java.lang.Number dataFormat) {
            this.props.dataFormat(dataFormat);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param id2 This parameter is required.
         */
        public Builder id2(final java.lang.Boolean id2) {
            this.props.id2(id2);
            return this;
        }
        /**
         * @return {@code this}
         * @param id2 This parameter is required.
         */
        public Builder id2(final com.aliyun.ros.cdk.core.IResolvable id2) {
            this.props.id2(id2);
            return this;
        }

        /**
         * @return {@code this}
         * @param iotInstanceId This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param joinPermissionId This parameter is required.
         */
        public Builder joinPermissionId(final java.lang.String joinPermissionId) {
            this.props.joinPermissionId(joinPermissionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param netType This parameter is required.
         */
        public Builder netType(final java.lang.String netType) {
            this.props.netType(netType);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocolType This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * @return {@code this}
         * @param publishAuto This parameter is required.
         */
        public Builder publishAuto(final java.lang.Boolean publishAuto) {
            this.props.publishAuto(publishAuto);
            return this;
        }
        /**
         * @return {@code this}
         * @param publishAuto This parameter is required.
         */
        public Builder publishAuto(final com.aliyun.ros.cdk.core.IResolvable publishAuto) {
            this.props.publishAuto(publishAuto);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.iot.RosProduct}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.RosProduct build() {
            return new com.aliyun.ros.cdk.iot.RosProduct(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
