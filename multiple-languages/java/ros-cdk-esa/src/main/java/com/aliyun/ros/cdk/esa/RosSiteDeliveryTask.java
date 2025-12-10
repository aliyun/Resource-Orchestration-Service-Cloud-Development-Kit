package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::SiteDeliveryTask</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.686Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask")
public class RosSiteDeliveryTask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSiteDeliveryTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSiteDeliveryTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSiteDeliveryTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosSiteDeliveryTaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBusinessType() {
        return software.amazon.jsii.Kernel.get(this, "attrBusinessType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDataCenter() {
        return software.amazon.jsii.Kernel.get(this, "attrDataCenter", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryType() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiscardRate() {
        return software.amazon.jsii.Kernel.get(this, "attrDiscardRate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFieldName() {
        return software.amazon.jsii.Kernel.get(this, "attrFieldName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFilterRules() {
        return software.amazon.jsii.Kernel.get(this, "attrFilterRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSinkConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrSinkConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSiteName() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskName() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBusinessType() {
        return software.amazon.jsii.Kernel.get(this, "businessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBusinessType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "businessType", java.util.Objects.requireNonNull(value, "businessType is required"));
    }

    /**
     */
    public void setBusinessType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "businessType", java.util.Objects.requireNonNull(value, "businessType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDataCenter() {
        return software.amazon.jsii.Kernel.get(this, "dataCenter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataCenter(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataCenter", java.util.Objects.requireNonNull(value, "dataCenter is required"));
    }

    /**
     */
    public void setDataCenter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataCenter", java.util.Objects.requireNonNull(value, "dataCenter is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryType() {
        return software.amazon.jsii.Kernel.get(this, "deliveryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryType", java.util.Objects.requireNonNull(value, "deliveryType is required"));
    }

    /**
     */
    public void setDeliveryType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryType", java.util.Objects.requireNonNull(value, "deliveryType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFieldName() {
        return software.amazon.jsii.Kernel.get(this, "fieldName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFieldName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fieldName", java.util.Objects.requireNonNull(value, "fieldName is required"));
    }

    /**
     */
    public void setFieldName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fieldName", java.util.Objects.requireNonNull(value, "fieldName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSiteId() {
        return software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTaskName() {
        return software.amazon.jsii.Kernel.get(this, "taskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTaskName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "taskName", java.util.Objects.requireNonNull(value, "taskName is required"));
    }

    /**
     */
    public void setTaskName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "taskName", java.util.Objects.requireNonNull(value, "taskName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiscardRate() {
        return software.amazon.jsii.Kernel.get(this, "discardRate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiscardRate(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "discardRate", value);
    }

    /**
     */
    public void setDiscardRate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "discardRate", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpDelivery() {
        return software.amazon.jsii.Kernel.get(this, "httpDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpDelivery", value);
    }

    /**
     */
    public void setHttpDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.HttpDeliveryProperty value) {
        software.amazon.jsii.Kernel.set(this, "httpDelivery", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKafkaDelivery() {
        return software.amazon.jsii.Kernel.get(this, "kafkaDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKafkaDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kafkaDelivery", value);
    }

    /**
     */
    public void setKafkaDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.KafkaDeliveryProperty value) {
        software.amazon.jsii.Kernel.set(this, "kafkaDelivery", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssDelivery() {
        return software.amazon.jsii.Kernel.get(this, "ossDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossDelivery", value);
    }

    /**
     */
    public void setOssDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.OssDeliveryProperty value) {
        software.amazon.jsii.Kernel.set(this, "ossDelivery", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getS3Delivery() {
        return software.amazon.jsii.Kernel.get(this, "s3Delivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setS3Delivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "s3Delivery", value);
    }

    /**
     */
    public void setS3Delivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.S3DeliveryProperty value) {
        software.amazon.jsii.Kernel.set(this, "s3Delivery", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlsDelivery() {
        return software.amazon.jsii.Kernel.get(this, "slsDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsDelivery", value);
    }

    /**
     */
    public void setSlsDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.SlsDeliveryProperty value) {
        software.amazon.jsii.Kernel.set(this, "slsDelivery", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask.HeaderParamProperty")
    @software.amazon.jsii.Jsii.Proxy(HeaderParamProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HeaderParamProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStaticValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HeaderParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HeaderParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HeaderParamProperty> {
            java.lang.Object staticValue;

            /**
             * Sets the value of {@link HeaderParamProperty#getStaticValue}
             * @param staticValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder staticValue(java.lang.String staticValue) {
                this.staticValue = staticValue;
                return this;
            }

            /**
             * Sets the value of {@link HeaderParamProperty#getStaticValue}
             * @param staticValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder staticValue(com.aliyun.ros.cdk.core.IResolvable staticValue) {
                this.staticValue = staticValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HeaderParamProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HeaderParamProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HeaderParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HeaderParamProperty {
            private final java.lang.Object staticValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.staticValue = software.amazon.jsii.Kernel.get(this, "staticValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.staticValue = builder.staticValue;
            }

            @Override
            public final java.lang.Object getStaticValue() {
                return this.staticValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getStaticValue() != null) {
                    data.set("staticValue", om.valueToTree(this.getStaticValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteDeliveryTask.HeaderParamProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HeaderParamProperty.Jsii$Proxy that = (HeaderParamProperty.Jsii$Proxy) o;

                return this.staticValue != null ? this.staticValue.equals(that.staticValue) : that.staticValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.staticValue != null ? this.staticValue.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask.HttpDeliveryProperty")
    @software.amazon.jsii.Jsii.Proxy(HttpDeliveryProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HttpDeliveryProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDestUrl();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCompress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeaderParam() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogBodyPrefix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLogBodySuffix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxBatchMb() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxBatchSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxRetry() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueryParam() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStandardAuthOn() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStandardAuthParam() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTransformTimeout() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HttpDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HttpDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HttpDeliveryProperty> {
            java.lang.Object destUrl;
            java.lang.Object compress;
            java.lang.Object headerParam;
            java.lang.Object logBodyPrefix;
            java.lang.Object logBodySuffix;
            java.lang.Object maxBatchMb;
            java.lang.Object maxBatchSize;
            java.lang.Object maxRetry;
            java.lang.Object queryParam;
            java.lang.Object standardAuthOn;
            java.lang.Object standardAuthParam;
            java.lang.Object transformTimeout;

            /**
             * Sets the value of {@link HttpDeliveryProperty#getDestUrl}
             * @param destUrl the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destUrl(java.lang.String destUrl) {
                this.destUrl = destUrl;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getDestUrl}
             * @param destUrl the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destUrl(com.aliyun.ros.cdk.core.IResolvable destUrl) {
                this.destUrl = destUrl;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getCompress}
             * @param compress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder compress(java.lang.String compress) {
                this.compress = compress;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getCompress}
             * @param compress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder compress(com.aliyun.ros.cdk.core.IResolvable compress) {
                this.compress = compress;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getHeaderParam}
             * @param headerParam the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerParam(com.aliyun.ros.cdk.core.IResolvable headerParam) {
                this.headerParam = headerParam;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getHeaderParam}
             * @param headerParam the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerParam(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.HeaderParamProperty headerParam) {
                this.headerParam = headerParam;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getLogBodyPrefix}
             * @param logBodyPrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logBodyPrefix(java.lang.String logBodyPrefix) {
                this.logBodyPrefix = logBodyPrefix;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getLogBodyPrefix}
             * @param logBodyPrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logBodyPrefix(com.aliyun.ros.cdk.core.IResolvable logBodyPrefix) {
                this.logBodyPrefix = logBodyPrefix;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getLogBodySuffix}
             * @param logBodySuffix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logBodySuffix(java.lang.String logBodySuffix) {
                this.logBodySuffix = logBodySuffix;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getLogBodySuffix}
             * @param logBodySuffix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logBodySuffix(com.aliyun.ros.cdk.core.IResolvable logBodySuffix) {
                this.logBodySuffix = logBodySuffix;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getMaxBatchMb}
             * @param maxBatchMb the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxBatchMb(java.lang.Number maxBatchMb) {
                this.maxBatchMb = maxBatchMb;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getMaxBatchMb}
             * @param maxBatchMb the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxBatchMb(com.aliyun.ros.cdk.core.IResolvable maxBatchMb) {
                this.maxBatchMb = maxBatchMb;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getMaxBatchSize}
             * @param maxBatchSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxBatchSize(java.lang.Number maxBatchSize) {
                this.maxBatchSize = maxBatchSize;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getMaxBatchSize}
             * @param maxBatchSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxBatchSize(com.aliyun.ros.cdk.core.IResolvable maxBatchSize) {
                this.maxBatchSize = maxBatchSize;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getMaxRetry}
             * @param maxRetry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxRetry(java.lang.Number maxRetry) {
                this.maxRetry = maxRetry;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getMaxRetry}
             * @param maxRetry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxRetry(com.aliyun.ros.cdk.core.IResolvable maxRetry) {
                this.maxRetry = maxRetry;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getQueryParam}
             * @param queryParam the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryParam(com.aliyun.ros.cdk.core.IResolvable queryParam) {
                this.queryParam = queryParam;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getQueryParam}
             * @param queryParam the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryParam(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.QueryParamProperty queryParam) {
                this.queryParam = queryParam;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getStandardAuthOn}
             * @param standardAuthOn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder standardAuthOn(java.lang.Boolean standardAuthOn) {
                this.standardAuthOn = standardAuthOn;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getStandardAuthOn}
             * @param standardAuthOn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder standardAuthOn(com.aliyun.ros.cdk.core.IResolvable standardAuthOn) {
                this.standardAuthOn = standardAuthOn;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getStandardAuthParam}
             * @param standardAuthParam the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder standardAuthParam(com.aliyun.ros.cdk.core.IResolvable standardAuthParam) {
                this.standardAuthParam = standardAuthParam;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getStandardAuthParam}
             * @param standardAuthParam the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder standardAuthParam(com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.StandardAuthParamProperty standardAuthParam) {
                this.standardAuthParam = standardAuthParam;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getTransformTimeout}
             * @param transformTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder transformTimeout(java.lang.Number transformTimeout) {
                this.transformTimeout = transformTimeout;
                return this;
            }

            /**
             * Sets the value of {@link HttpDeliveryProperty#getTransformTimeout}
             * @param transformTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder transformTimeout(com.aliyun.ros.cdk.core.IResolvable transformTimeout) {
                this.transformTimeout = transformTimeout;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HttpDeliveryProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HttpDeliveryProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HttpDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpDeliveryProperty {
            private final java.lang.Object destUrl;
            private final java.lang.Object compress;
            private final java.lang.Object headerParam;
            private final java.lang.Object logBodyPrefix;
            private final java.lang.Object logBodySuffix;
            private final java.lang.Object maxBatchMb;
            private final java.lang.Object maxBatchSize;
            private final java.lang.Object maxRetry;
            private final java.lang.Object queryParam;
            private final java.lang.Object standardAuthOn;
            private final java.lang.Object standardAuthParam;
            private final java.lang.Object transformTimeout;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.destUrl = software.amazon.jsii.Kernel.get(this, "destUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.compress = software.amazon.jsii.Kernel.get(this, "compress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.headerParam = software.amazon.jsii.Kernel.get(this, "headerParam", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logBodyPrefix = software.amazon.jsii.Kernel.get(this, "logBodyPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.logBodySuffix = software.amazon.jsii.Kernel.get(this, "logBodySuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxBatchMb = software.amazon.jsii.Kernel.get(this, "maxBatchMb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxBatchSize = software.amazon.jsii.Kernel.get(this, "maxBatchSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxRetry = software.amazon.jsii.Kernel.get(this, "maxRetry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryParam = software.amazon.jsii.Kernel.get(this, "queryParam", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.standardAuthOn = software.amazon.jsii.Kernel.get(this, "standardAuthOn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.standardAuthParam = software.amazon.jsii.Kernel.get(this, "standardAuthParam", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.transformTimeout = software.amazon.jsii.Kernel.get(this, "transformTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.destUrl = java.util.Objects.requireNonNull(builder.destUrl, "destUrl is required");
                this.compress = builder.compress;
                this.headerParam = builder.headerParam;
                this.logBodyPrefix = builder.logBodyPrefix;
                this.logBodySuffix = builder.logBodySuffix;
                this.maxBatchMb = builder.maxBatchMb;
                this.maxBatchSize = builder.maxBatchSize;
                this.maxRetry = builder.maxRetry;
                this.queryParam = builder.queryParam;
                this.standardAuthOn = builder.standardAuthOn;
                this.standardAuthParam = builder.standardAuthParam;
                this.transformTimeout = builder.transformTimeout;
            }

            @Override
            public final java.lang.Object getDestUrl() {
                return this.destUrl;
            }

            @Override
            public final java.lang.Object getCompress() {
                return this.compress;
            }

            @Override
            public final java.lang.Object getHeaderParam() {
                return this.headerParam;
            }

            @Override
            public final java.lang.Object getLogBodyPrefix() {
                return this.logBodyPrefix;
            }

            @Override
            public final java.lang.Object getLogBodySuffix() {
                return this.logBodySuffix;
            }

            @Override
            public final java.lang.Object getMaxBatchMb() {
                return this.maxBatchMb;
            }

            @Override
            public final java.lang.Object getMaxBatchSize() {
                return this.maxBatchSize;
            }

            @Override
            public final java.lang.Object getMaxRetry() {
                return this.maxRetry;
            }

            @Override
            public final java.lang.Object getQueryParam() {
                return this.queryParam;
            }

            @Override
            public final java.lang.Object getStandardAuthOn() {
                return this.standardAuthOn;
            }

            @Override
            public final java.lang.Object getStandardAuthParam() {
                return this.standardAuthParam;
            }

            @Override
            public final java.lang.Object getTransformTimeout() {
                return this.transformTimeout;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("destUrl", om.valueToTree(this.getDestUrl()));
                if (this.getCompress() != null) {
                    data.set("compress", om.valueToTree(this.getCompress()));
                }
                if (this.getHeaderParam() != null) {
                    data.set("headerParam", om.valueToTree(this.getHeaderParam()));
                }
                if (this.getLogBodyPrefix() != null) {
                    data.set("logBodyPrefix", om.valueToTree(this.getLogBodyPrefix()));
                }
                if (this.getLogBodySuffix() != null) {
                    data.set("logBodySuffix", om.valueToTree(this.getLogBodySuffix()));
                }
                if (this.getMaxBatchMb() != null) {
                    data.set("maxBatchMb", om.valueToTree(this.getMaxBatchMb()));
                }
                if (this.getMaxBatchSize() != null) {
                    data.set("maxBatchSize", om.valueToTree(this.getMaxBatchSize()));
                }
                if (this.getMaxRetry() != null) {
                    data.set("maxRetry", om.valueToTree(this.getMaxRetry()));
                }
                if (this.getQueryParam() != null) {
                    data.set("queryParam", om.valueToTree(this.getQueryParam()));
                }
                if (this.getStandardAuthOn() != null) {
                    data.set("standardAuthOn", om.valueToTree(this.getStandardAuthOn()));
                }
                if (this.getStandardAuthParam() != null) {
                    data.set("standardAuthParam", om.valueToTree(this.getStandardAuthParam()));
                }
                if (this.getTransformTimeout() != null) {
                    data.set("transformTimeout", om.valueToTree(this.getTransformTimeout()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteDeliveryTask.HttpDeliveryProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HttpDeliveryProperty.Jsii$Proxy that = (HttpDeliveryProperty.Jsii$Proxy) o;

                if (!destUrl.equals(that.destUrl)) return false;
                if (this.compress != null ? !this.compress.equals(that.compress) : that.compress != null) return false;
                if (this.headerParam != null ? !this.headerParam.equals(that.headerParam) : that.headerParam != null) return false;
                if (this.logBodyPrefix != null ? !this.logBodyPrefix.equals(that.logBodyPrefix) : that.logBodyPrefix != null) return false;
                if (this.logBodySuffix != null ? !this.logBodySuffix.equals(that.logBodySuffix) : that.logBodySuffix != null) return false;
                if (this.maxBatchMb != null ? !this.maxBatchMb.equals(that.maxBatchMb) : that.maxBatchMb != null) return false;
                if (this.maxBatchSize != null ? !this.maxBatchSize.equals(that.maxBatchSize) : that.maxBatchSize != null) return false;
                if (this.maxRetry != null ? !this.maxRetry.equals(that.maxRetry) : that.maxRetry != null) return false;
                if (this.queryParam != null ? !this.queryParam.equals(that.queryParam) : that.queryParam != null) return false;
                if (this.standardAuthOn != null ? !this.standardAuthOn.equals(that.standardAuthOn) : that.standardAuthOn != null) return false;
                if (this.standardAuthParam != null ? !this.standardAuthParam.equals(that.standardAuthParam) : that.standardAuthParam != null) return false;
                return this.transformTimeout != null ? this.transformTimeout.equals(that.transformTimeout) : that.transformTimeout == null;
            }

            @Override
            public final int hashCode() {
                int result = this.destUrl.hashCode();
                result = 31 * result + (this.compress != null ? this.compress.hashCode() : 0);
                result = 31 * result + (this.headerParam != null ? this.headerParam.hashCode() : 0);
                result = 31 * result + (this.logBodyPrefix != null ? this.logBodyPrefix.hashCode() : 0);
                result = 31 * result + (this.logBodySuffix != null ? this.logBodySuffix.hashCode() : 0);
                result = 31 * result + (this.maxBatchMb != null ? this.maxBatchMb.hashCode() : 0);
                result = 31 * result + (this.maxBatchSize != null ? this.maxBatchSize.hashCode() : 0);
                result = 31 * result + (this.maxRetry != null ? this.maxRetry.hashCode() : 0);
                result = 31 * result + (this.queryParam != null ? this.queryParam.hashCode() : 0);
                result = 31 * result + (this.standardAuthOn != null ? this.standardAuthOn.hashCode() : 0);
                result = 31 * result + (this.standardAuthParam != null ? this.standardAuthParam.hashCode() : 0);
                result = 31 * result + (this.transformTimeout != null ? this.transformTimeout.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask.KafkaDeliveryProperty")
    @software.amazon.jsii.Jsii.Proxy(KafkaDeliveryProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface KafkaDeliveryProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBalancer() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBrokers() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCompress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMachanismType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTopic() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserAuth() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link KafkaDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link KafkaDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<KafkaDeliveryProperty> {
            java.lang.Object balancer;
            java.lang.Object brokers;
            java.lang.Object compress;
            java.lang.Object machanismType;
            java.lang.Object password;
            java.lang.Object topic;
            java.lang.Object userAuth;
            java.lang.Object userName;

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getBalancer}
             * @param balancer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder balancer(java.lang.String balancer) {
                this.balancer = balancer;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getBalancer}
             * @param balancer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder balancer(com.aliyun.ros.cdk.core.IResolvable balancer) {
                this.balancer = balancer;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getBrokers}
             * @param brokers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder brokers(com.aliyun.ros.cdk.core.IResolvable brokers) {
                this.brokers = brokers;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getBrokers}
             * @param brokers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder brokers(java.util.List<? extends java.lang.Object> brokers) {
                this.brokers = brokers;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getCompress}
             * @param compress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder compress(java.lang.String compress) {
                this.compress = compress;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getCompress}
             * @param compress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder compress(com.aliyun.ros.cdk.core.IResolvable compress) {
                this.compress = compress;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getMachanismType}
             * @param machanismType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder machanismType(java.lang.String machanismType) {
                this.machanismType = machanismType;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getMachanismType}
             * @param machanismType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder machanismType(com.aliyun.ros.cdk.core.IResolvable machanismType) {
                this.machanismType = machanismType;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getTopic}
             * @param topic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder topic(java.lang.String topic) {
                this.topic = topic;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getTopic}
             * @param topic the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder topic(com.aliyun.ros.cdk.core.IResolvable topic) {
                this.topic = topic;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getUserAuth}
             * @param userAuth the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userAuth(java.lang.Boolean userAuth) {
                this.userAuth = userAuth;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getUserAuth}
             * @param userAuth the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userAuth(com.aliyun.ros.cdk.core.IResolvable userAuth) {
                this.userAuth = userAuth;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link KafkaDeliveryProperty#getUserName}
             * @param userName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link KafkaDeliveryProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public KafkaDeliveryProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link KafkaDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KafkaDeliveryProperty {
            private final java.lang.Object balancer;
            private final java.lang.Object brokers;
            private final java.lang.Object compress;
            private final java.lang.Object machanismType;
            private final java.lang.Object password;
            private final java.lang.Object topic;
            private final java.lang.Object userAuth;
            private final java.lang.Object userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.balancer = software.amazon.jsii.Kernel.get(this, "balancer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.brokers = software.amazon.jsii.Kernel.get(this, "brokers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.compress = software.amazon.jsii.Kernel.get(this, "compress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.machanismType = software.amazon.jsii.Kernel.get(this, "machanismType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.topic = software.amazon.jsii.Kernel.get(this, "topic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userAuth = software.amazon.jsii.Kernel.get(this, "userAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.balancer = builder.balancer;
                this.brokers = builder.brokers;
                this.compress = builder.compress;
                this.machanismType = builder.machanismType;
                this.password = builder.password;
                this.topic = builder.topic;
                this.userAuth = builder.userAuth;
                this.userName = builder.userName;
            }

            @Override
            public final java.lang.Object getBalancer() {
                return this.balancer;
            }

            @Override
            public final java.lang.Object getBrokers() {
                return this.brokers;
            }

            @Override
            public final java.lang.Object getCompress() {
                return this.compress;
            }

            @Override
            public final java.lang.Object getMachanismType() {
                return this.machanismType;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getTopic() {
                return this.topic;
            }

            @Override
            public final java.lang.Object getUserAuth() {
                return this.userAuth;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBalancer() != null) {
                    data.set("balancer", om.valueToTree(this.getBalancer()));
                }
                if (this.getBrokers() != null) {
                    data.set("brokers", om.valueToTree(this.getBrokers()));
                }
                if (this.getCompress() != null) {
                    data.set("compress", om.valueToTree(this.getCompress()));
                }
                if (this.getMachanismType() != null) {
                    data.set("machanismType", om.valueToTree(this.getMachanismType()));
                }
                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getTopic() != null) {
                    data.set("topic", om.valueToTree(this.getTopic()));
                }
                if (this.getUserAuth() != null) {
                    data.set("userAuth", om.valueToTree(this.getUserAuth()));
                }
                if (this.getUserName() != null) {
                    data.set("userName", om.valueToTree(this.getUserName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteDeliveryTask.KafkaDeliveryProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                KafkaDeliveryProperty.Jsii$Proxy that = (KafkaDeliveryProperty.Jsii$Proxy) o;

                if (this.balancer != null ? !this.balancer.equals(that.balancer) : that.balancer != null) return false;
                if (this.brokers != null ? !this.brokers.equals(that.brokers) : that.brokers != null) return false;
                if (this.compress != null ? !this.compress.equals(that.compress) : that.compress != null) return false;
                if (this.machanismType != null ? !this.machanismType.equals(that.machanismType) : that.machanismType != null) return false;
                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                if (this.topic != null ? !this.topic.equals(that.topic) : that.topic != null) return false;
                if (this.userAuth != null ? !this.userAuth.equals(that.userAuth) : that.userAuth != null) return false;
                return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.balancer != null ? this.balancer.hashCode() : 0;
                result = 31 * result + (this.brokers != null ? this.brokers.hashCode() : 0);
                result = 31 * result + (this.compress != null ? this.compress.hashCode() : 0);
                result = 31 * result + (this.machanismType != null ? this.machanismType.hashCode() : 0);
                result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
                result = 31 * result + (this.topic != null ? this.topic.hashCode() : 0);
                result = 31 * result + (this.userAuth != null ? this.userAuth.hashCode() : 0);
                result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask.OssDeliveryProperty")
    @software.amazon.jsii.Jsii.Proxy(OssDeliveryProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OssDeliveryProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAliuid() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBucketName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrefixPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OssDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OssDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OssDeliveryProperty> {
            java.lang.Object aliuid;
            java.lang.Object bucketName;
            java.lang.Object prefixPath;
            java.lang.Object region;

            /**
             * Sets the value of {@link OssDeliveryProperty#getAliuid}
             * @param aliuid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aliuid(java.lang.String aliuid) {
                this.aliuid = aliuid;
                return this;
            }

            /**
             * Sets the value of {@link OssDeliveryProperty#getAliuid}
             * @param aliuid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aliuid(com.aliyun.ros.cdk.core.IResolvable aliuid) {
                this.aliuid = aliuid;
                return this;
            }

            /**
             * Sets the value of {@link OssDeliveryProperty#getBucketName}
             * @param bucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketName(java.lang.String bucketName) {
                this.bucketName = bucketName;
                return this;
            }

            /**
             * Sets the value of {@link OssDeliveryProperty#getBucketName}
             * @param bucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
                this.bucketName = bucketName;
                return this;
            }

            /**
             * Sets the value of {@link OssDeliveryProperty#getPrefixPath}
             * @param prefixPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefixPath(java.lang.String prefixPath) {
                this.prefixPath = prefixPath;
                return this;
            }

            /**
             * Sets the value of {@link OssDeliveryProperty#getPrefixPath}
             * @param prefixPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefixPath(com.aliyun.ros.cdk.core.IResolvable prefixPath) {
                this.prefixPath = prefixPath;
                return this;
            }

            /**
             * Sets the value of {@link OssDeliveryProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link OssDeliveryProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
                this.region = region;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OssDeliveryProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OssDeliveryProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OssDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OssDeliveryProperty {
            private final java.lang.Object aliuid;
            private final java.lang.Object bucketName;
            private final java.lang.Object prefixPath;
            private final java.lang.Object region;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.aliuid = software.amazon.jsii.Kernel.get(this, "aliuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.prefixPath = software.amazon.jsii.Kernel.get(this, "prefixPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.aliuid = builder.aliuid;
                this.bucketName = builder.bucketName;
                this.prefixPath = builder.prefixPath;
                this.region = builder.region;
            }

            @Override
            public final java.lang.Object getAliuid() {
                return this.aliuid;
            }

            @Override
            public final java.lang.Object getBucketName() {
                return this.bucketName;
            }

            @Override
            public final java.lang.Object getPrefixPath() {
                return this.prefixPath;
            }

            @Override
            public final java.lang.Object getRegion() {
                return this.region;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAliuid() != null) {
                    data.set("aliuid", om.valueToTree(this.getAliuid()));
                }
                if (this.getBucketName() != null) {
                    data.set("bucketName", om.valueToTree(this.getBucketName()));
                }
                if (this.getPrefixPath() != null) {
                    data.set("prefixPath", om.valueToTree(this.getPrefixPath()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteDeliveryTask.OssDeliveryProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OssDeliveryProperty.Jsii$Proxy that = (OssDeliveryProperty.Jsii$Proxy) o;

                if (this.aliuid != null ? !this.aliuid.equals(that.aliuid) : that.aliuid != null) return false;
                if (this.bucketName != null ? !this.bucketName.equals(that.bucketName) : that.bucketName != null) return false;
                if (this.prefixPath != null ? !this.prefixPath.equals(that.prefixPath) : that.prefixPath != null) return false;
                return this.region != null ? this.region.equals(that.region) : that.region == null;
            }

            @Override
            public final int hashCode() {
                int result = this.aliuid != null ? this.aliuid.hashCode() : 0;
                result = 31 * result + (this.bucketName != null ? this.bucketName.hashCode() : 0);
                result = 31 * result + (this.prefixPath != null ? this.prefixPath.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask.QueryParamProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryParamProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryParamProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStaticValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QueryParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryParamProperty> {
            java.lang.Object staticValue;

            /**
             * Sets the value of {@link QueryParamProperty#getStaticValue}
             * @param staticValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder staticValue(java.lang.String staticValue) {
                this.staticValue = staticValue;
                return this;
            }

            /**
             * Sets the value of {@link QueryParamProperty#getStaticValue}
             * @param staticValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder staticValue(com.aliyun.ros.cdk.core.IResolvable staticValue) {
                this.staticValue = staticValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QueryParamProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryParamProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryParamProperty {
            private final java.lang.Object staticValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.staticValue = software.amazon.jsii.Kernel.get(this, "staticValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.staticValue = builder.staticValue;
            }

            @Override
            public final java.lang.Object getStaticValue() {
                return this.staticValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getStaticValue() != null) {
                    data.set("staticValue", om.valueToTree(this.getStaticValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteDeliveryTask.QueryParamProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryParamProperty.Jsii$Proxy that = (QueryParamProperty.Jsii$Proxy) o;

                return this.staticValue != null ? this.staticValue.equals(that.staticValue) : that.staticValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.staticValue != null ? this.staticValue.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask.S3DeliveryProperty")
    @software.amazon.jsii.Jsii.Proxy(S3DeliveryProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface S3DeliveryProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAccessKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBucketPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpoint() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrefixPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getS3Cmpt() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecretKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getServerSideEncryption() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVertifyType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link S3DeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link S3DeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<S3DeliveryProperty> {
            java.lang.Object accessKey;
            java.lang.Object bucketPath;
            java.lang.Object endpoint;
            java.lang.Object prefixPath;
            java.lang.Object region;
            java.lang.Object s3Cmpt;
            java.lang.Object secretKey;
            java.lang.Object serverSideEncryption;
            java.lang.Object vertifyType;

            /**
             * Sets the value of {@link S3DeliveryProperty#getAccessKey}
             * @param accessKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accessKey(java.lang.String accessKey) {
                this.accessKey = accessKey;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getAccessKey}
             * @param accessKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accessKey(com.aliyun.ros.cdk.core.IResolvable accessKey) {
                this.accessKey = accessKey;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getBucketPath}
             * @param bucketPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketPath(java.lang.String bucketPath) {
                this.bucketPath = bucketPath;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getBucketPath}
             * @param bucketPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucketPath(com.aliyun.ros.cdk.core.IResolvable bucketPath) {
                this.bucketPath = bucketPath;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(java.lang.String endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getPrefixPath}
             * @param prefixPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefixPath(java.lang.String prefixPath) {
                this.prefixPath = prefixPath;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getPrefixPath}
             * @param prefixPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefixPath(com.aliyun.ros.cdk.core.IResolvable prefixPath) {
                this.prefixPath = prefixPath;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(java.lang.String region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getRegion}
             * @param region the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
                this.region = region;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getS3Cmpt}
             * @param s3Cmpt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder s3Cmpt(java.lang.Boolean s3Cmpt) {
                this.s3Cmpt = s3Cmpt;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getS3Cmpt}
             * @param s3Cmpt the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder s3Cmpt(com.aliyun.ros.cdk.core.IResolvable s3Cmpt) {
                this.s3Cmpt = s3Cmpt;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getSecretKey}
             * @param secretKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder secretKey(java.lang.String secretKey) {
                this.secretKey = secretKey;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getSecretKey}
             * @param secretKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder secretKey(com.aliyun.ros.cdk.core.IResolvable secretKey) {
                this.secretKey = secretKey;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getServerSideEncryption}
             * @param serverSideEncryption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverSideEncryption(java.lang.Boolean serverSideEncryption) {
                this.serverSideEncryption = serverSideEncryption;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getServerSideEncryption}
             * @param serverSideEncryption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverSideEncryption(com.aliyun.ros.cdk.core.IResolvable serverSideEncryption) {
                this.serverSideEncryption = serverSideEncryption;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getVertifyType}
             * @param vertifyType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vertifyType(java.lang.String vertifyType) {
                this.vertifyType = vertifyType;
                return this;
            }

            /**
             * Sets the value of {@link S3DeliveryProperty#getVertifyType}
             * @param vertifyType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vertifyType(com.aliyun.ros.cdk.core.IResolvable vertifyType) {
                this.vertifyType = vertifyType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link S3DeliveryProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public S3DeliveryProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link S3DeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements S3DeliveryProperty {
            private final java.lang.Object accessKey;
            private final java.lang.Object bucketPath;
            private final java.lang.Object endpoint;
            private final java.lang.Object prefixPath;
            private final java.lang.Object region;
            private final java.lang.Object s3Cmpt;
            private final java.lang.Object secretKey;
            private final java.lang.Object serverSideEncryption;
            private final java.lang.Object vertifyType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.accessKey = software.amazon.jsii.Kernel.get(this, "accessKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bucketPath = software.amazon.jsii.Kernel.get(this, "bucketPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.prefixPath = software.amazon.jsii.Kernel.get(this, "prefixPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.s3Cmpt = software.amazon.jsii.Kernel.get(this, "s3Cmpt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.secretKey = software.amazon.jsii.Kernel.get(this, "secretKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serverSideEncryption = software.amazon.jsii.Kernel.get(this, "serverSideEncryption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vertifyType = software.amazon.jsii.Kernel.get(this, "vertifyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.accessKey = builder.accessKey;
                this.bucketPath = builder.bucketPath;
                this.endpoint = builder.endpoint;
                this.prefixPath = builder.prefixPath;
                this.region = builder.region;
                this.s3Cmpt = builder.s3Cmpt;
                this.secretKey = builder.secretKey;
                this.serverSideEncryption = builder.serverSideEncryption;
                this.vertifyType = builder.vertifyType;
            }

            @Override
            public final java.lang.Object getAccessKey() {
                return this.accessKey;
            }

            @Override
            public final java.lang.Object getBucketPath() {
                return this.bucketPath;
            }

            @Override
            public final java.lang.Object getEndpoint() {
                return this.endpoint;
            }

            @Override
            public final java.lang.Object getPrefixPath() {
                return this.prefixPath;
            }

            @Override
            public final java.lang.Object getRegion() {
                return this.region;
            }

            @Override
            public final java.lang.Object getS3Cmpt() {
                return this.s3Cmpt;
            }

            @Override
            public final java.lang.Object getSecretKey() {
                return this.secretKey;
            }

            @Override
            public final java.lang.Object getServerSideEncryption() {
                return this.serverSideEncryption;
            }

            @Override
            public final java.lang.Object getVertifyType() {
                return this.vertifyType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAccessKey() != null) {
                    data.set("accessKey", om.valueToTree(this.getAccessKey()));
                }
                if (this.getBucketPath() != null) {
                    data.set("bucketPath", om.valueToTree(this.getBucketPath()));
                }
                if (this.getEndpoint() != null) {
                    data.set("endpoint", om.valueToTree(this.getEndpoint()));
                }
                if (this.getPrefixPath() != null) {
                    data.set("prefixPath", om.valueToTree(this.getPrefixPath()));
                }
                if (this.getRegion() != null) {
                    data.set("region", om.valueToTree(this.getRegion()));
                }
                if (this.getS3Cmpt() != null) {
                    data.set("s3Cmpt", om.valueToTree(this.getS3Cmpt()));
                }
                if (this.getSecretKey() != null) {
                    data.set("secretKey", om.valueToTree(this.getSecretKey()));
                }
                if (this.getServerSideEncryption() != null) {
                    data.set("serverSideEncryption", om.valueToTree(this.getServerSideEncryption()));
                }
                if (this.getVertifyType() != null) {
                    data.set("vertifyType", om.valueToTree(this.getVertifyType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteDeliveryTask.S3DeliveryProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                S3DeliveryProperty.Jsii$Proxy that = (S3DeliveryProperty.Jsii$Proxy) o;

                if (this.accessKey != null ? !this.accessKey.equals(that.accessKey) : that.accessKey != null) return false;
                if (this.bucketPath != null ? !this.bucketPath.equals(that.bucketPath) : that.bucketPath != null) return false;
                if (this.endpoint != null ? !this.endpoint.equals(that.endpoint) : that.endpoint != null) return false;
                if (this.prefixPath != null ? !this.prefixPath.equals(that.prefixPath) : that.prefixPath != null) return false;
                if (this.region != null ? !this.region.equals(that.region) : that.region != null) return false;
                if (this.s3Cmpt != null ? !this.s3Cmpt.equals(that.s3Cmpt) : that.s3Cmpt != null) return false;
                if (this.secretKey != null ? !this.secretKey.equals(that.secretKey) : that.secretKey != null) return false;
                if (this.serverSideEncryption != null ? !this.serverSideEncryption.equals(that.serverSideEncryption) : that.serverSideEncryption != null) return false;
                return this.vertifyType != null ? this.vertifyType.equals(that.vertifyType) : that.vertifyType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.accessKey != null ? this.accessKey.hashCode() : 0;
                result = 31 * result + (this.bucketPath != null ? this.bucketPath.hashCode() : 0);
                result = 31 * result + (this.endpoint != null ? this.endpoint.hashCode() : 0);
                result = 31 * result + (this.prefixPath != null ? this.prefixPath.hashCode() : 0);
                result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
                result = 31 * result + (this.s3Cmpt != null ? this.s3Cmpt.hashCode() : 0);
                result = 31 * result + (this.secretKey != null ? this.secretKey.hashCode() : 0);
                result = 31 * result + (this.serverSideEncryption != null ? this.serverSideEncryption.hashCode() : 0);
                result = 31 * result + (this.vertifyType != null ? this.vertifyType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask.SlsDeliveryProperty")
    @software.amazon.jsii.Jsii.Proxy(SlsDeliveryProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SlsDeliveryProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlsLogStore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlsProject() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlsRegion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SlsDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SlsDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SlsDeliveryProperty> {
            java.lang.Object slsLogStore;
            java.lang.Object slsProject;
            java.lang.Object slsRegion;

            /**
             * Sets the value of {@link SlsDeliveryProperty#getSlsLogStore}
             * @param slsLogStore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsLogStore(java.lang.String slsLogStore) {
                this.slsLogStore = slsLogStore;
                return this;
            }

            /**
             * Sets the value of {@link SlsDeliveryProperty#getSlsLogStore}
             * @param slsLogStore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsLogStore(com.aliyun.ros.cdk.core.IResolvable slsLogStore) {
                this.slsLogStore = slsLogStore;
                return this;
            }

            /**
             * Sets the value of {@link SlsDeliveryProperty#getSlsProject}
             * @param slsProject the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProject(java.lang.String slsProject) {
                this.slsProject = slsProject;
                return this;
            }

            /**
             * Sets the value of {@link SlsDeliveryProperty#getSlsProject}
             * @param slsProject the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProject(com.aliyun.ros.cdk.core.IResolvable slsProject) {
                this.slsProject = slsProject;
                return this;
            }

            /**
             * Sets the value of {@link SlsDeliveryProperty#getSlsRegion}
             * @param slsRegion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsRegion(java.lang.String slsRegion) {
                this.slsRegion = slsRegion;
                return this;
            }

            /**
             * Sets the value of {@link SlsDeliveryProperty#getSlsRegion}
             * @param slsRegion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsRegion(com.aliyun.ros.cdk.core.IResolvable slsRegion) {
                this.slsRegion = slsRegion;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SlsDeliveryProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SlsDeliveryProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SlsDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SlsDeliveryProperty {
            private final java.lang.Object slsLogStore;
            private final java.lang.Object slsProject;
            private final java.lang.Object slsRegion;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.slsLogStore = software.amazon.jsii.Kernel.get(this, "slsLogStore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slsProject = software.amazon.jsii.Kernel.get(this, "slsProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slsRegion = software.amazon.jsii.Kernel.get(this, "slsRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.slsLogStore = builder.slsLogStore;
                this.slsProject = builder.slsProject;
                this.slsRegion = builder.slsRegion;
            }

            @Override
            public final java.lang.Object getSlsLogStore() {
                return this.slsLogStore;
            }

            @Override
            public final java.lang.Object getSlsProject() {
                return this.slsProject;
            }

            @Override
            public final java.lang.Object getSlsRegion() {
                return this.slsRegion;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getSlsLogStore() != null) {
                    data.set("slsLogStore", om.valueToTree(this.getSlsLogStore()));
                }
                if (this.getSlsProject() != null) {
                    data.set("slsProject", om.valueToTree(this.getSlsProject()));
                }
                if (this.getSlsRegion() != null) {
                    data.set("slsRegion", om.valueToTree(this.getSlsRegion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteDeliveryTask.SlsDeliveryProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SlsDeliveryProperty.Jsii$Proxy that = (SlsDeliveryProperty.Jsii$Proxy) o;

                if (this.slsLogStore != null ? !this.slsLogStore.equals(that.slsLogStore) : that.slsLogStore != null) return false;
                if (this.slsProject != null ? !this.slsProject.equals(that.slsProject) : that.slsProject != null) return false;
                return this.slsRegion != null ? this.slsRegion.equals(that.slsRegion) : that.slsRegion == null;
            }

            @Override
            public final int hashCode() {
                int result = this.slsLogStore != null ? this.slsLogStore.hashCode() : 0;
                result = 31 * result + (this.slsProject != null ? this.slsProject.hashCode() : 0);
                result = 31 * result + (this.slsRegion != null ? this.slsRegion.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosSiteDeliveryTask.StandardAuthParamProperty")
    @software.amazon.jsii.Jsii.Proxy(StandardAuthParamProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface StandardAuthParamProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpiredTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUrlPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link StandardAuthParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link StandardAuthParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<StandardAuthParamProperty> {
            java.lang.Object expiredTime;
            java.lang.Object privateKey;
            java.lang.Object urlPath;

            /**
             * Sets the value of {@link StandardAuthParamProperty#getExpiredTime}
             * @param expiredTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expiredTime(java.lang.Number expiredTime) {
                this.expiredTime = expiredTime;
                return this;
            }

            /**
             * Sets the value of {@link StandardAuthParamProperty#getExpiredTime}
             * @param expiredTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expiredTime(com.aliyun.ros.cdk.core.IResolvable expiredTime) {
                this.expiredTime = expiredTime;
                return this;
            }

            /**
             * Sets the value of {@link StandardAuthParamProperty#getPrivateKey}
             * @param privateKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateKey(java.lang.String privateKey) {
                this.privateKey = privateKey;
                return this;
            }

            /**
             * Sets the value of {@link StandardAuthParamProperty#getPrivateKey}
             * @param privateKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateKey(com.aliyun.ros.cdk.core.IResolvable privateKey) {
                this.privateKey = privateKey;
                return this;
            }

            /**
             * Sets the value of {@link StandardAuthParamProperty#getUrlPath}
             * @param urlPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder urlPath(java.lang.String urlPath) {
                this.urlPath = urlPath;
                return this;
            }

            /**
             * Sets the value of {@link StandardAuthParamProperty#getUrlPath}
             * @param urlPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder urlPath(com.aliyun.ros.cdk.core.IResolvable urlPath) {
                this.urlPath = urlPath;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link StandardAuthParamProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public StandardAuthParamProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link StandardAuthParamProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StandardAuthParamProperty {
            private final java.lang.Object expiredTime;
            private final java.lang.Object privateKey;
            private final java.lang.Object urlPath;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.expiredTime = software.amazon.jsii.Kernel.get(this, "expiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.privateKey = software.amazon.jsii.Kernel.get(this, "privateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.urlPath = software.amazon.jsii.Kernel.get(this, "urlPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.expiredTime = builder.expiredTime;
                this.privateKey = builder.privateKey;
                this.urlPath = builder.urlPath;
            }

            @Override
            public final java.lang.Object getExpiredTime() {
                return this.expiredTime;
            }

            @Override
            public final java.lang.Object getPrivateKey() {
                return this.privateKey;
            }

            @Override
            public final java.lang.Object getUrlPath() {
                return this.urlPath;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getExpiredTime() != null) {
                    data.set("expiredTime", om.valueToTree(this.getExpiredTime()));
                }
                if (this.getPrivateKey() != null) {
                    data.set("privateKey", om.valueToTree(this.getPrivateKey()));
                }
                if (this.getUrlPath() != null) {
                    data.set("urlPath", om.valueToTree(this.getUrlPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosSiteDeliveryTask.StandardAuthParamProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                StandardAuthParamProperty.Jsii$Proxy that = (StandardAuthParamProperty.Jsii$Proxy) o;

                if (this.expiredTime != null ? !this.expiredTime.equals(that.expiredTime) : that.expiredTime != null) return false;
                if (this.privateKey != null ? !this.privateKey.equals(that.privateKey) : that.privateKey != null) return false;
                return this.urlPath != null ? this.urlPath.equals(that.urlPath) : that.urlPath == null;
            }

            @Override
            public final int hashCode() {
                int result = this.expiredTime != null ? this.expiredTime.hashCode() : 0;
                result = 31 * result + (this.privateKey != null ? this.privateKey.hashCode() : 0);
                result = 31 * result + (this.urlPath != null ? this.urlPath.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosSiteDeliveryTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosSiteDeliveryTask> {
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
        private final com.aliyun.ros.cdk.esa.RosSiteDeliveryTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosSiteDeliveryTaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param businessType This parameter is required.
         */
        public Builder businessType(final java.lang.String businessType) {
            this.props.businessType(businessType);
            return this;
        }
        /**
         * @return {@code this}
         * @param businessType This parameter is required.
         */
        public Builder businessType(final com.aliyun.ros.cdk.core.IResolvable businessType) {
            this.props.businessType(businessType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataCenter This parameter is required.
         */
        public Builder dataCenter(final java.lang.String dataCenter) {
            this.props.dataCenter(dataCenter);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataCenter This parameter is required.
         */
        public Builder dataCenter(final com.aliyun.ros.cdk.core.IResolvable dataCenter) {
            this.props.dataCenter(dataCenter);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryType This parameter is required.
         */
        public Builder deliveryType(final java.lang.String deliveryType) {
            this.props.deliveryType(deliveryType);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryType This parameter is required.
         */
        public Builder deliveryType(final com.aliyun.ros.cdk.core.IResolvable deliveryType) {
            this.props.deliveryType(deliveryType);
            return this;
        }

        /**
         * @return {@code this}
         * @param fieldName This parameter is required.
         */
        public Builder fieldName(final java.lang.String fieldName) {
            this.props.fieldName(fieldName);
            return this;
        }
        /**
         * @return {@code this}
         * @param fieldName This parameter is required.
         */
        public Builder fieldName(final com.aliyun.ros.cdk.core.IResolvable fieldName) {
            this.props.fieldName(fieldName);
            return this;
        }

        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * @return {@code this}
         * @param taskName This parameter is required.
         */
        public Builder taskName(final java.lang.String taskName) {
            this.props.taskName(taskName);
            return this;
        }
        /**
         * @return {@code this}
         * @param taskName This parameter is required.
         */
        public Builder taskName(final com.aliyun.ros.cdk.core.IResolvable taskName) {
            this.props.taskName(taskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param discardRate This parameter is required.
         */
        public Builder discardRate(final java.lang.Number discardRate) {
            this.props.discardRate(discardRate);
            return this;
        }
        /**
         * @return {@code this}
         * @param discardRate This parameter is required.
         */
        public Builder discardRate(final com.aliyun.ros.cdk.core.IResolvable discardRate) {
            this.props.discardRate(discardRate);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpDelivery This parameter is required.
         */
        public Builder httpDelivery(final com.aliyun.ros.cdk.core.IResolvable httpDelivery) {
            this.props.httpDelivery(httpDelivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpDelivery This parameter is required.
         */
        public Builder httpDelivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.HttpDeliveryProperty httpDelivery) {
            this.props.httpDelivery(httpDelivery);
            return this;
        }

        /**
         * @return {@code this}
         * @param kafkaDelivery This parameter is required.
         */
        public Builder kafkaDelivery(final com.aliyun.ros.cdk.core.IResolvable kafkaDelivery) {
            this.props.kafkaDelivery(kafkaDelivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param kafkaDelivery This parameter is required.
         */
        public Builder kafkaDelivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.KafkaDeliveryProperty kafkaDelivery) {
            this.props.kafkaDelivery(kafkaDelivery);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossDelivery This parameter is required.
         */
        public Builder ossDelivery(final com.aliyun.ros.cdk.core.IResolvable ossDelivery) {
            this.props.ossDelivery(ossDelivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossDelivery This parameter is required.
         */
        public Builder ossDelivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.OssDeliveryProperty ossDelivery) {
            this.props.ossDelivery(ossDelivery);
            return this;
        }

        /**
         * @return {@code this}
         * @param s3Delivery This parameter is required.
         */
        public Builder s3Delivery(final com.aliyun.ros.cdk.core.IResolvable s3Delivery) {
            this.props.s3Delivery(s3Delivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param s3Delivery This parameter is required.
         */
        public Builder s3Delivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.S3DeliveryProperty s3Delivery) {
            this.props.s3Delivery(s3Delivery);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsDelivery This parameter is required.
         */
        public Builder slsDelivery(final com.aliyun.ros.cdk.core.IResolvable slsDelivery) {
            this.props.slsDelivery(slsDelivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsDelivery This parameter is required.
         */
        public Builder slsDelivery(final com.aliyun.ros.cdk.esa.RosSiteDeliveryTask.SlsDeliveryProperty slsDelivery) {
            this.props.slsDelivery(slsDelivery);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosSiteDeliveryTask}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosSiteDeliveryTask build() {
            return new com.aliyun.ros.cdk.esa.RosSiteDeliveryTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
