package com.aliyun.ros.cdk.sls;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SLS::OssExport</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.497Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosOssExport")
public class RosOssExport extends com.aliyun.ros.cdk.core.RosResource {

    protected RosOssExport(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosOssExport(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sls.RosOssExport.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosOssExport(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosOssExportProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExportName() {
        return software.amazon.jsii.Kernel.get(this, "attrExportName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configuration", java.util.Objects.requireNonNull(value, "configuration is required"));
    }

    /**
     */
    public void setConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosOssExport.ConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "configuration", java.util.Objects.requireNonNull(value, "configuration is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExportName() {
        return software.amazon.jsii.Kernel.get(this, "exportName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExportName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "exportName", java.util.Objects.requireNonNull(value, "exportName is required"));
    }

    /**
     */
    public void setExportName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exportName", java.util.Objects.requireNonNull(value, "exportName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProjectName() {
        return software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosOssExport.ConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLogstore();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRoleArn();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSink();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFromTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getToTime() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigurationProperty> {
            java.lang.Object logstore;
            java.lang.Object roleArn;
            java.lang.Object sink;
            java.lang.Object fromTime;
            java.lang.Object toTime;

            /**
             * Sets the value of {@link ConfigurationProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(java.lang.String logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getLogstore}
             * @param logstore the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder logstore(com.aliyun.ros.cdk.core.IResolvable logstore) {
                this.logstore = logstore;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(java.lang.String roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSink}
             * @param sink the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sink(com.aliyun.ros.cdk.core.IResolvable sink) {
                this.sink = sink;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSink}
             * @param sink the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sink(com.aliyun.ros.cdk.sls.RosOssExport.SinkProperty sink) {
                this.sink = sink;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getFromTime}
             * @param fromTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fromTime(java.lang.Number fromTime) {
                this.fromTime = fromTime;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getFromTime}
             * @param fromTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fromTime(com.aliyun.ros.cdk.core.IResolvable fromTime) {
                this.fromTime = fromTime;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getToTime}
             * @param toTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toTime(java.lang.Number toTime) {
                this.toTime = toTime;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getToTime}
             * @param toTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toTime(com.aliyun.ros.cdk.core.IResolvable toTime) {
                this.toTime = toTime;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigurationProperty {
            private final java.lang.Object logstore;
            private final java.lang.Object roleArn;
            private final java.lang.Object sink;
            private final java.lang.Object fromTime;
            private final java.lang.Object toTime;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.logstore = software.amazon.jsii.Kernel.get(this, "logstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sink = software.amazon.jsii.Kernel.get(this, "sink", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fromTime = software.amazon.jsii.Kernel.get(this, "fromTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.toTime = software.amazon.jsii.Kernel.get(this, "toTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.logstore = java.util.Objects.requireNonNull(builder.logstore, "logstore is required");
                this.roleArn = java.util.Objects.requireNonNull(builder.roleArn, "roleArn is required");
                this.sink = java.util.Objects.requireNonNull(builder.sink, "sink is required");
                this.fromTime = builder.fromTime;
                this.toTime = builder.toTime;
            }

            @Override
            public final java.lang.Object getLogstore() {
                return this.logstore;
            }

            @Override
            public final java.lang.Object getRoleArn() {
                return this.roleArn;
            }

            @Override
            public final java.lang.Object getSink() {
                return this.sink;
            }

            @Override
            public final java.lang.Object getFromTime() {
                return this.fromTime;
            }

            @Override
            public final java.lang.Object getToTime() {
                return this.toTime;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("logstore", om.valueToTree(this.getLogstore()));
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
                data.set("sink", om.valueToTree(this.getSink()));
                if (this.getFromTime() != null) {
                    data.set("fromTime", om.valueToTree(this.getFromTime()));
                }
                if (this.getToTime() != null) {
                    data.set("toTime", om.valueToTree(this.getToTime()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosOssExport.ConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigurationProperty.Jsii$Proxy that = (ConfigurationProperty.Jsii$Proxy) o;

                if (!logstore.equals(that.logstore)) return false;
                if (!roleArn.equals(that.roleArn)) return false;
                if (!sink.equals(that.sink)) return false;
                if (this.fromTime != null ? !this.fromTime.equals(that.fromTime) : that.fromTime != null) return false;
                return this.toTime != null ? this.toTime.equals(that.toTime) : that.toTime == null;
            }

            @Override
            public final int hashCode() {
                int result = this.logstore.hashCode();
                result = 31 * result + (this.roleArn.hashCode());
                result = 31 * result + (this.sink.hashCode());
                result = 31 * result + (this.fromTime != null ? this.fromTime.hashCode() : 0);
                result = 31 * result + (this.toTime != null ? this.toTime.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosOssExport.SinkProperty")
    @software.amazon.jsii.Jsii.Proxy(SinkProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SinkProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getBufferInterval();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getBufferSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getContentType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRoleArn();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCompressionType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContentDetail() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDelaySeconds() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getPathFormat() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPathFormatType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrefix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSuffix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeZone() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SinkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SinkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SinkProperty> {
            java.lang.Object bucket;
            java.lang.Object bufferInterval;
            java.lang.Object bufferSize;
            java.lang.Object contentType;
            java.lang.Object roleArn;
            java.lang.Object compressionType;
            java.lang.Object contentDetail;
            java.lang.Object delaySeconds;
            java.lang.Object endpoint;
            java.lang.Object pathFormat;
            java.lang.Object pathFormatType;
            java.lang.Object prefix;
            java.lang.Object suffix;
            java.lang.Object timeZone;

            /**
             * Sets the value of {@link SinkProperty#getBucket}
             * @param bucket the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucket(java.lang.String bucket) {
                this.bucket = bucket;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getBucket}
             * @param bucket the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
                this.bucket = bucket;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getBufferInterval}
             * @param bufferInterval the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bufferInterval(java.lang.Number bufferInterval) {
                this.bufferInterval = bufferInterval;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getBufferInterval}
             * @param bufferInterval the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bufferInterval(com.aliyun.ros.cdk.core.IResolvable bufferInterval) {
                this.bufferInterval = bufferInterval;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getBufferSize}
             * @param bufferSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bufferSize(java.lang.Number bufferSize) {
                this.bufferSize = bufferSize;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getBufferSize}
             * @param bufferSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bufferSize(com.aliyun.ros.cdk.core.IResolvable bufferSize) {
                this.bufferSize = bufferSize;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getContentType}
             * @param contentType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentType(java.lang.String contentType) {
                this.contentType = contentType;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getContentType}
             * @param contentType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentType(com.aliyun.ros.cdk.core.IResolvable contentType) {
                this.contentType = contentType;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(java.lang.String roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getCompressionType}
             * @param compressionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder compressionType(java.lang.String compressionType) {
                this.compressionType = compressionType;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getCompressionType}
             * @param compressionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder compressionType(com.aliyun.ros.cdk.core.IResolvable compressionType) {
                this.compressionType = compressionType;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getContentDetail}
             * @param contentDetail the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentDetail(com.aliyun.ros.cdk.core.IResolvable contentDetail) {
                this.contentDetail = contentDetail;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getContentDetail}
             * @param contentDetail the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentDetail(java.util.Map<java.lang.String, ? extends java.lang.Object> contentDetail) {
                this.contentDetail = contentDetail;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getDelaySeconds}
             * @param delaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder delaySeconds(java.lang.Number delaySeconds) {
                this.delaySeconds = delaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getDelaySeconds}
             * @param delaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder delaySeconds(com.aliyun.ros.cdk.core.IResolvable delaySeconds) {
                this.delaySeconds = delaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(java.lang.String endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getEndpoint}
             * @param endpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getPathFormat}
             * @param pathFormat the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathFormat(java.lang.String pathFormat) {
                this.pathFormat = pathFormat;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getPathFormat}
             * @param pathFormat the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathFormat(com.aliyun.ros.cdk.core.IResolvable pathFormat) {
                this.pathFormat = pathFormat;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getPathFormatType}
             * @param pathFormatType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathFormatType(java.lang.String pathFormatType) {
                this.pathFormatType = pathFormatType;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getPathFormatType}
             * @param pathFormatType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pathFormatType(com.aliyun.ros.cdk.core.IResolvable pathFormatType) {
                this.pathFormatType = pathFormatType;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getPrefix}
             * @param prefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(java.lang.String prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getPrefix}
             * @param prefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(com.aliyun.ros.cdk.core.IResolvable prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getSuffix}
             * @param suffix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder suffix(java.lang.String suffix) {
                this.suffix = suffix;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getSuffix}
             * @param suffix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder suffix(com.aliyun.ros.cdk.core.IResolvable suffix) {
                this.suffix = suffix;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getTimeZone}
             * @param timeZone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeZone(java.lang.String timeZone) {
                this.timeZone = timeZone;
                return this;
            }

            /**
             * Sets the value of {@link SinkProperty#getTimeZone}
             * @param timeZone the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeZone(com.aliyun.ros.cdk.core.IResolvable timeZone) {
                this.timeZone = timeZone;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SinkProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SinkProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SinkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SinkProperty {
            private final java.lang.Object bucket;
            private final java.lang.Object bufferInterval;
            private final java.lang.Object bufferSize;
            private final java.lang.Object contentType;
            private final java.lang.Object roleArn;
            private final java.lang.Object compressionType;
            private final java.lang.Object contentDetail;
            private final java.lang.Object delaySeconds;
            private final java.lang.Object endpoint;
            private final java.lang.Object pathFormat;
            private final java.lang.Object pathFormatType;
            private final java.lang.Object prefix;
            private final java.lang.Object suffix;
            private final java.lang.Object timeZone;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bufferInterval = software.amazon.jsii.Kernel.get(this, "bufferInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.bufferSize = software.amazon.jsii.Kernel.get(this, "bufferSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contentType = software.amazon.jsii.Kernel.get(this, "contentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.compressionType = software.amazon.jsii.Kernel.get(this, "compressionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.contentDetail = software.amazon.jsii.Kernel.get(this, "contentDetail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.delaySeconds = software.amazon.jsii.Kernel.get(this, "delaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pathFormat = software.amazon.jsii.Kernel.get(this, "pathFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pathFormatType = software.amazon.jsii.Kernel.get(this, "pathFormatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.suffix = software.amazon.jsii.Kernel.get(this, "suffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeZone = software.amazon.jsii.Kernel.get(this, "timeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
                this.bufferInterval = java.util.Objects.requireNonNull(builder.bufferInterval, "bufferInterval is required");
                this.bufferSize = java.util.Objects.requireNonNull(builder.bufferSize, "bufferSize is required");
                this.contentType = java.util.Objects.requireNonNull(builder.contentType, "contentType is required");
                this.roleArn = java.util.Objects.requireNonNull(builder.roleArn, "roleArn is required");
                this.compressionType = builder.compressionType;
                this.contentDetail = builder.contentDetail;
                this.delaySeconds = builder.delaySeconds;
                this.endpoint = builder.endpoint;
                this.pathFormat = builder.pathFormat;
                this.pathFormatType = builder.pathFormatType;
                this.prefix = builder.prefix;
                this.suffix = builder.suffix;
                this.timeZone = builder.timeZone;
            }

            @Override
            public final java.lang.Object getBucket() {
                return this.bucket;
            }

            @Override
            public final java.lang.Object getBufferInterval() {
                return this.bufferInterval;
            }

            @Override
            public final java.lang.Object getBufferSize() {
                return this.bufferSize;
            }

            @Override
            public final java.lang.Object getContentType() {
                return this.contentType;
            }

            @Override
            public final java.lang.Object getRoleArn() {
                return this.roleArn;
            }

            @Override
            public final java.lang.Object getCompressionType() {
                return this.compressionType;
            }

            @Override
            public final java.lang.Object getContentDetail() {
                return this.contentDetail;
            }

            @Override
            public final java.lang.Object getDelaySeconds() {
                return this.delaySeconds;
            }

            @Override
            public final java.lang.Object getEndpoint() {
                return this.endpoint;
            }

            @Override
            public final java.lang.Object getPathFormat() {
                return this.pathFormat;
            }

            @Override
            public final java.lang.Object getPathFormatType() {
                return this.pathFormatType;
            }

            @Override
            public final java.lang.Object getPrefix() {
                return this.prefix;
            }

            @Override
            public final java.lang.Object getSuffix() {
                return this.suffix;
            }

            @Override
            public final java.lang.Object getTimeZone() {
                return this.timeZone;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("bucket", om.valueToTree(this.getBucket()));
                data.set("bufferInterval", om.valueToTree(this.getBufferInterval()));
                data.set("bufferSize", om.valueToTree(this.getBufferSize()));
                data.set("contentType", om.valueToTree(this.getContentType()));
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
                if (this.getCompressionType() != null) {
                    data.set("compressionType", om.valueToTree(this.getCompressionType()));
                }
                if (this.getContentDetail() != null) {
                    data.set("contentDetail", om.valueToTree(this.getContentDetail()));
                }
                if (this.getDelaySeconds() != null) {
                    data.set("delaySeconds", om.valueToTree(this.getDelaySeconds()));
                }
                if (this.getEndpoint() != null) {
                    data.set("endpoint", om.valueToTree(this.getEndpoint()));
                }
                if (this.getPathFormat() != null) {
                    data.set("pathFormat", om.valueToTree(this.getPathFormat()));
                }
                if (this.getPathFormatType() != null) {
                    data.set("pathFormatType", om.valueToTree(this.getPathFormatType()));
                }
                if (this.getPrefix() != null) {
                    data.set("prefix", om.valueToTree(this.getPrefix()));
                }
                if (this.getSuffix() != null) {
                    data.set("suffix", om.valueToTree(this.getSuffix()));
                }
                if (this.getTimeZone() != null) {
                    data.set("timeZone", om.valueToTree(this.getTimeZone()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosOssExport.SinkProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SinkProperty.Jsii$Proxy that = (SinkProperty.Jsii$Proxy) o;

                if (!bucket.equals(that.bucket)) return false;
                if (!bufferInterval.equals(that.bufferInterval)) return false;
                if (!bufferSize.equals(that.bufferSize)) return false;
                if (!contentType.equals(that.contentType)) return false;
                if (!roleArn.equals(that.roleArn)) return false;
                if (this.compressionType != null ? !this.compressionType.equals(that.compressionType) : that.compressionType != null) return false;
                if (this.contentDetail != null ? !this.contentDetail.equals(that.contentDetail) : that.contentDetail != null) return false;
                if (this.delaySeconds != null ? !this.delaySeconds.equals(that.delaySeconds) : that.delaySeconds != null) return false;
                if (this.endpoint != null ? !this.endpoint.equals(that.endpoint) : that.endpoint != null) return false;
                if (this.pathFormat != null ? !this.pathFormat.equals(that.pathFormat) : that.pathFormat != null) return false;
                if (this.pathFormatType != null ? !this.pathFormatType.equals(that.pathFormatType) : that.pathFormatType != null) return false;
                if (this.prefix != null ? !this.prefix.equals(that.prefix) : that.prefix != null) return false;
                if (this.suffix != null ? !this.suffix.equals(that.suffix) : that.suffix != null) return false;
                return this.timeZone != null ? this.timeZone.equals(that.timeZone) : that.timeZone == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bucket.hashCode();
                result = 31 * result + (this.bufferInterval.hashCode());
                result = 31 * result + (this.bufferSize.hashCode());
                result = 31 * result + (this.contentType.hashCode());
                result = 31 * result + (this.roleArn.hashCode());
                result = 31 * result + (this.compressionType != null ? this.compressionType.hashCode() : 0);
                result = 31 * result + (this.contentDetail != null ? this.contentDetail.hashCode() : 0);
                result = 31 * result + (this.delaySeconds != null ? this.delaySeconds.hashCode() : 0);
                result = 31 * result + (this.endpoint != null ? this.endpoint.hashCode() : 0);
                result = 31 * result + (this.pathFormat != null ? this.pathFormat.hashCode() : 0);
                result = 31 * result + (this.pathFormatType != null ? this.pathFormatType.hashCode() : 0);
                result = 31 * result + (this.prefix != null ? this.prefix.hashCode() : 0);
                result = 31 * result + (this.suffix != null ? this.suffix.hashCode() : 0);
                result = 31 * result + (this.timeZone != null ? this.timeZone.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RosOssExport}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RosOssExport> {
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
        private final com.aliyun.ros.cdk.sls.RosOssExportProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RosOssExportProps.Builder();
        }

        /**
         * @return {@code this}
         * @param configuration This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.props.configuration(configuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param configuration This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.sls.RosOssExport.ConfigurationProperty configuration) {
            this.props.configuration(configuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * @return {@code this}
         * @param exportName This parameter is required.
         */
        public Builder exportName(final java.lang.String exportName) {
            this.props.exportName(exportName);
            return this;
        }
        /**
         * @return {@code this}
         * @param exportName This parameter is required.
         */
        public Builder exportName(final com.aliyun.ros.cdk.core.IResolvable exportName) {
            this.props.exportName(exportName);
            return this;
        }

        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
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
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.RosOssExport}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RosOssExport build() {
            return new com.aliyun.ros.cdk.sls.RosOssExport(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
