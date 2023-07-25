package com.aliyun.ros.cdk.rocketmq5;

/**
 * A ROS template type:  <code>ALIYUN::ROCKETMQ5::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:02.051Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.rocketmq5.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ROCKETMQ5::Instance</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getInternetInfo() {
        return software.amazon.jsii.Kernel.get(this, "internetInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetInfo", java.util.Objects.requireNonNull(value, "internetInfo is required"));
    }

    /**
     */
    public void setInternetInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.RosInstance.InternetInfoProperty value) {
        software.amazon.jsii.Kernel.set(this, "internetInfo", java.util.Objects.requireNonNull(value, "internetInfo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProductInfo() {
        return software.amazon.jsii.Kernel.get(this, "productInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productInfo", java.util.Objects.requireNonNull(value, "productInfo is required"));
    }

    /**
     */
    public void setProductInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.RosInstance.ProductInfoProperty value) {
        software.amazon.jsii.Kernel.set(this, "productInfo", java.util.Objects.requireNonNull(value, "productInfo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSeriesCode() {
        return software.amazon.jsii.Kernel.get(this, "seriesCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSeriesCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "seriesCode", java.util.Objects.requireNonNull(value, "seriesCode is required"));
    }

    /**
     */
    public void setSeriesCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "seriesCode", java.util.Objects.requireNonNull(value, "seriesCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSubSeriesCode() {
        return software.amazon.jsii.Kernel.get(this, "subSeriesCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubSeriesCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "subSeriesCode", java.util.Objects.requireNonNull(value, "subSeriesCode is required"));
    }

    /**
     */
    public void setSubSeriesCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subSeriesCode", java.util.Objects.requireNonNull(value, "subSeriesCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcInfo() {
        return software.amazon.jsii.Kernel.get(this, "vpcInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcInfo", java.util.Objects.requireNonNull(value, "vpcInfo is required"));
    }

    /**
     */
    public void setVpcInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.RosInstance.VpcInfoProperty value) {
        software.amazon.jsii.Kernel.set(this, "vpcInfo", java.util.Objects.requireNonNull(value, "vpcInfo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.RosInstance.InternetInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(InternetInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InternetInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInternetSpec();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFlowOutBandwidth() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpWhitelist() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InternetInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InternetInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InternetInfoProperty> {
            java.lang.Object internetSpec;
            java.lang.Object flowOutBandwidth;
            java.lang.Object ipWhitelist;

            /**
             * Sets the value of {@link InternetInfoProperty#getInternetSpec}
             * @param internetSpec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetSpec(java.lang.String internetSpec) {
                this.internetSpec = internetSpec;
                return this;
            }

            /**
             * Sets the value of {@link InternetInfoProperty#getInternetSpec}
             * @param internetSpec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder internetSpec(com.aliyun.ros.cdk.core.IResolvable internetSpec) {
                this.internetSpec = internetSpec;
                return this;
            }

            /**
             * Sets the value of {@link InternetInfoProperty#getFlowOutBandwidth}
             * @param flowOutBandwidth the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flowOutBandwidth(java.lang.Number flowOutBandwidth) {
                this.flowOutBandwidth = flowOutBandwidth;
                return this;
            }

            /**
             * Sets the value of {@link InternetInfoProperty#getFlowOutBandwidth}
             * @param flowOutBandwidth the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flowOutBandwidth(com.aliyun.ros.cdk.core.IResolvable flowOutBandwidth) {
                this.flowOutBandwidth = flowOutBandwidth;
                return this;
            }

            /**
             * Sets the value of {@link InternetInfoProperty#getIpWhitelist}
             * @param ipWhitelist the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipWhitelist(com.aliyun.ros.cdk.core.IResolvable ipWhitelist) {
                this.ipWhitelist = ipWhitelist;
                return this;
            }

            /**
             * Sets the value of {@link InternetInfoProperty#getIpWhitelist}
             * @param ipWhitelist the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipWhitelist(java.util.List<? extends java.lang.Object> ipWhitelist) {
                this.ipWhitelist = ipWhitelist;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InternetInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InternetInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InternetInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InternetInfoProperty {
            private final java.lang.Object internetSpec;
            private final java.lang.Object flowOutBandwidth;
            private final java.lang.Object ipWhitelist;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.internetSpec = software.amazon.jsii.Kernel.get(this, "internetSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.flowOutBandwidth = software.amazon.jsii.Kernel.get(this, "flowOutBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipWhitelist = software.amazon.jsii.Kernel.get(this, "ipWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.internetSpec = java.util.Objects.requireNonNull(builder.internetSpec, "internetSpec is required");
                this.flowOutBandwidth = builder.flowOutBandwidth;
                this.ipWhitelist = builder.ipWhitelist;
            }

            @Override
            public final java.lang.Object getInternetSpec() {
                return this.internetSpec;
            }

            @Override
            public final java.lang.Object getFlowOutBandwidth() {
                return this.flowOutBandwidth;
            }

            @Override
            public final java.lang.Object getIpWhitelist() {
                return this.ipWhitelist;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("internetSpec", om.valueToTree(this.getInternetSpec()));
                if (this.getFlowOutBandwidth() != null) {
                    data.set("flowOutBandwidth", om.valueToTree(this.getFlowOutBandwidth()));
                }
                if (this.getIpWhitelist() != null) {
                    data.set("ipWhitelist", om.valueToTree(this.getIpWhitelist()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.RosInstance.InternetInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InternetInfoProperty.Jsii$Proxy that = (InternetInfoProperty.Jsii$Proxy) o;

                if (!internetSpec.equals(that.internetSpec)) return false;
                if (this.flowOutBandwidth != null ? !this.flowOutBandwidth.equals(that.flowOutBandwidth) : that.flowOutBandwidth != null) return false;
                return this.ipWhitelist != null ? this.ipWhitelist.equals(that.ipWhitelist) : that.ipWhitelist == null;
            }

            @Override
            public final int hashCode() {
                int result = this.internetSpec.hashCode();
                result = 31 * result + (this.flowOutBandwidth != null ? this.flowOutBandwidth.hashCode() : 0);
                result = 31 * result + (this.ipWhitelist != null ? this.ipWhitelist.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.RosInstance.ProductInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(ProductInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ProductInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMsgProcessSpec();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoScaling() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMessageRetentionTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSendReceiveRatio() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ProductInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ProductInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ProductInfoProperty> {
            java.lang.Object msgProcessSpec;
            java.lang.Object autoScaling;
            java.lang.Object messageRetentionTime;
            java.lang.Object sendReceiveRatio;

            /**
             * Sets the value of {@link ProductInfoProperty#getMsgProcessSpec}
             * @param msgProcessSpec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder msgProcessSpec(java.lang.String msgProcessSpec) {
                this.msgProcessSpec = msgProcessSpec;
                return this;
            }

            /**
             * Sets the value of {@link ProductInfoProperty#getMsgProcessSpec}
             * @param msgProcessSpec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder msgProcessSpec(com.aliyun.ros.cdk.core.IResolvable msgProcessSpec) {
                this.msgProcessSpec = msgProcessSpec;
                return this;
            }

            /**
             * Sets the value of {@link ProductInfoProperty#getAutoScaling}
             * @param autoScaling the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoScaling(java.lang.Boolean autoScaling) {
                this.autoScaling = autoScaling;
                return this;
            }

            /**
             * Sets the value of {@link ProductInfoProperty#getAutoScaling}
             * @param autoScaling the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoScaling(com.aliyun.ros.cdk.core.IResolvable autoScaling) {
                this.autoScaling = autoScaling;
                return this;
            }

            /**
             * Sets the value of {@link ProductInfoProperty#getMessageRetentionTime}
             * @param messageRetentionTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder messageRetentionTime(java.lang.Number messageRetentionTime) {
                this.messageRetentionTime = messageRetentionTime;
                return this;
            }

            /**
             * Sets the value of {@link ProductInfoProperty#getMessageRetentionTime}
             * @param messageRetentionTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder messageRetentionTime(com.aliyun.ros.cdk.core.IResolvable messageRetentionTime) {
                this.messageRetentionTime = messageRetentionTime;
                return this;
            }

            /**
             * Sets the value of {@link ProductInfoProperty#getSendReceiveRatio}
             * @param sendReceiveRatio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sendReceiveRatio(java.lang.Number sendReceiveRatio) {
                this.sendReceiveRatio = sendReceiveRatio;
                return this;
            }

            /**
             * Sets the value of {@link ProductInfoProperty#getSendReceiveRatio}
             * @param sendReceiveRatio the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sendReceiveRatio(com.aliyun.ros.cdk.core.IResolvable sendReceiveRatio) {
                this.sendReceiveRatio = sendReceiveRatio;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ProductInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ProductInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ProductInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProductInfoProperty {
            private final java.lang.Object msgProcessSpec;
            private final java.lang.Object autoScaling;
            private final java.lang.Object messageRetentionTime;
            private final java.lang.Object sendReceiveRatio;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.msgProcessSpec = software.amazon.jsii.Kernel.get(this, "msgProcessSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoScaling = software.amazon.jsii.Kernel.get(this, "autoScaling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.messageRetentionTime = software.amazon.jsii.Kernel.get(this, "messageRetentionTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sendReceiveRatio = software.amazon.jsii.Kernel.get(this, "sendReceiveRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.msgProcessSpec = java.util.Objects.requireNonNull(builder.msgProcessSpec, "msgProcessSpec is required");
                this.autoScaling = builder.autoScaling;
                this.messageRetentionTime = builder.messageRetentionTime;
                this.sendReceiveRatio = builder.sendReceiveRatio;
            }

            @Override
            public final java.lang.Object getMsgProcessSpec() {
                return this.msgProcessSpec;
            }

            @Override
            public final java.lang.Object getAutoScaling() {
                return this.autoScaling;
            }

            @Override
            public final java.lang.Object getMessageRetentionTime() {
                return this.messageRetentionTime;
            }

            @Override
            public final java.lang.Object getSendReceiveRatio() {
                return this.sendReceiveRatio;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("msgProcessSpec", om.valueToTree(this.getMsgProcessSpec()));
                if (this.getAutoScaling() != null) {
                    data.set("autoScaling", om.valueToTree(this.getAutoScaling()));
                }
                if (this.getMessageRetentionTime() != null) {
                    data.set("messageRetentionTime", om.valueToTree(this.getMessageRetentionTime()));
                }
                if (this.getSendReceiveRatio() != null) {
                    data.set("sendReceiveRatio", om.valueToTree(this.getSendReceiveRatio()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.RosInstance.ProductInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ProductInfoProperty.Jsii$Proxy that = (ProductInfoProperty.Jsii$Proxy) o;

                if (!msgProcessSpec.equals(that.msgProcessSpec)) return false;
                if (this.autoScaling != null ? !this.autoScaling.equals(that.autoScaling) : that.autoScaling != null) return false;
                if (this.messageRetentionTime != null ? !this.messageRetentionTime.equals(that.messageRetentionTime) : that.messageRetentionTime != null) return false;
                return this.sendReceiveRatio != null ? this.sendReceiveRatio.equals(that.sendReceiveRatio) : that.sendReceiveRatio == null;
            }

            @Override
            public final int hashCode() {
                int result = this.msgProcessSpec.hashCode();
                result = 31 * result + (this.autoScaling != null ? this.autoScaling.hashCode() : 0);
                result = 31 * result + (this.messageRetentionTime != null ? this.messageRetentionTime.hashCode() : 0);
                result = 31 * result + (this.sendReceiveRatio != null ? this.sendReceiveRatio.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.RosInstance.VpcInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(VpcInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VpcInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         * @return a {@link Builder} of {@link VpcInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VpcInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VpcInfoProperty> {
            java.lang.Object vpcId;
            java.lang.Object vSwitchId;

            /**
             * Sets the value of {@link VpcInfoProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link VpcInfoProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link VpcInfoProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link VpcInfoProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VpcInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VpcInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VpcInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcInfoProperty {
            private final java.lang.Object vpcId;
            private final java.lang.Object vSwitchId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
                this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("vpcId", om.valueToTree(this.getVpcId()));
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.RosInstance.VpcInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VpcInfoProperty.Jsii$Proxy that = (VpcInfoProperty.Jsii$Proxy) o;

                if (!vpcId.equals(that.vpcId)) return false;
                return this.vSwitchId.equals(that.vSwitchId);
            }

            @Override
            public final int hashCode() {
                int result = this.vpcId.hashCode();
                result = 31 * result + (this.vSwitchId.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rocketmq5.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rocketmq5.RosInstance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.rocketmq5.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rocketmq5.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param internetInfo This parameter is required.
         */
        public Builder internetInfo(final com.aliyun.ros.cdk.core.IResolvable internetInfo) {
            this.props.internetInfo(internetInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetInfo This parameter is required.
         */
        public Builder internetInfo(final com.aliyun.ros.cdk.rocketmq5.RosInstance.InternetInfoProperty internetInfo) {
            this.props.internetInfo(internetInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param productInfo This parameter is required.
         */
        public Builder productInfo(final com.aliyun.ros.cdk.core.IResolvable productInfo) {
            this.props.productInfo(productInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param productInfo This parameter is required.
         */
        public Builder productInfo(final com.aliyun.ros.cdk.rocketmq5.RosInstance.ProductInfoProperty productInfo) {
            this.props.productInfo(productInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param seriesCode This parameter is required.
         */
        public Builder seriesCode(final java.lang.String seriesCode) {
            this.props.seriesCode(seriesCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param seriesCode This parameter is required.
         */
        public Builder seriesCode(final com.aliyun.ros.cdk.core.IResolvable seriesCode) {
            this.props.seriesCode(seriesCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param subSeriesCode This parameter is required.
         */
        public Builder subSeriesCode(final java.lang.String subSeriesCode) {
            this.props.subSeriesCode(subSeriesCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param subSeriesCode This parameter is required.
         */
        public Builder subSeriesCode(final com.aliyun.ros.cdk.core.IResolvable subSeriesCode) {
            this.props.subSeriesCode(subSeriesCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcInfo This parameter is required.
         */
        public Builder vpcInfo(final com.aliyun.ros.cdk.core.IResolvable vpcInfo) {
            this.props.vpcInfo(vpcInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcInfo This parameter is required.
         */
        public Builder vpcInfo(final com.aliyun.ros.cdk.rocketmq5.RosInstance.VpcInfoProperty vpcInfo) {
            this.props.vpcInfo(vpcInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
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
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rocketmq5.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.rocketmq5.RosInstance build() {
            return new com.aliyun.ros.cdk.rocketmq5.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
