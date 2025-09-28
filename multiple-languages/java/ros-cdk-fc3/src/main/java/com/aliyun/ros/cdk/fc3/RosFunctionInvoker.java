package com.aliyun.ros.cdk.fc3;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::FC3::FunctionInvoker</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.944Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunctionInvoker")
public class RosFunctionInvoker extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFunctionInvoker(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFunctionInvoker(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc3.RosFunctionInvoker.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFunctionInvoker(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.RosFunctionInvokerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResult() {
        return software.amazon.jsii.Kernel.get(this, "attrResult", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResultType() {
        return software.amazon.jsii.Kernel.get(this, "attrResultType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFunctionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "functionName", java.util.Objects.requireNonNull(value, "functionName is required"));
    }

    /**
     */
    public void setFunctionName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "functionName", java.util.Objects.requireNonNull(value, "functionName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAsync() {
        return software.amazon.jsii.Kernel.get(this, "async", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAsync(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "async", value);
    }

    /**
     */
    public void setAsync(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "async", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCheckAsyncInvocation() {
        return software.amazon.jsii.Kernel.get(this, "checkAsyncInvocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCheckAsyncInvocation(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "checkAsyncInvocation", value);
    }

    /**
     */
    public void setCheckAsyncInvocation(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosFunctionInvoker.CheckAsyncInvocationProperty value) {
        software.amazon.jsii.Kernel.set(this, "checkAsyncInvocation", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCheckError() {
        return software.amazon.jsii.Kernel.get(this, "checkError", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCheckError(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "checkError", value);
    }

    /**
     */
    public void setCheckError(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "checkError", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEvent() {
        return software.amazon.jsii.Kernel.get(this, "event", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEvent(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "event", value);
    }

    /**
     */
    public void setEvent(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "event", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExecuteVersion() {
        return software.amazon.jsii.Kernel.get(this, "executeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExecuteVersion(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "executeVersion", value);
    }

    /**
     */
    public void setExecuteVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "executeVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
        return software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQualifier(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "qualifier", value);
    }

    /**
     */
    public void setQualifier(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "qualifier", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "serviceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceRegionId", value);
    }

    /**
     */
    public void setServiceRegionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceRegionId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosFunctionInvoker.CheckAsyncInvocationProperty")
    @software.amazon.jsii.Jsii.Proxy(CheckAsyncInvocationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CheckAsyncInvocationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCheckInterval();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCheckTimes();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnabled();

        /**
         * @return a {@link Builder} of {@link CheckAsyncInvocationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CheckAsyncInvocationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CheckAsyncInvocationProperty> {
            java.lang.Object checkInterval;
            java.lang.Object checkTimes;
            java.lang.Object enabled;

            /**
             * Sets the value of {@link CheckAsyncInvocationProperty#getCheckInterval}
             * @param checkInterval the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkInterval(java.lang.Number checkInterval) {
                this.checkInterval = checkInterval;
                return this;
            }

            /**
             * Sets the value of {@link CheckAsyncInvocationProperty#getCheckInterval}
             * @param checkInterval the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkInterval(com.aliyun.ros.cdk.core.IResolvable checkInterval) {
                this.checkInterval = checkInterval;
                return this;
            }

            /**
             * Sets the value of {@link CheckAsyncInvocationProperty#getCheckTimes}
             * @param checkTimes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkTimes(java.lang.Number checkTimes) {
                this.checkTimes = checkTimes;
                return this;
            }

            /**
             * Sets the value of {@link CheckAsyncInvocationProperty#getCheckTimes}
             * @param checkTimes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checkTimes(com.aliyun.ros.cdk.core.IResolvable checkTimes) {
                this.checkTimes = checkTimes;
                return this;
            }

            /**
             * Sets the value of {@link CheckAsyncInvocationProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(java.lang.Boolean enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link CheckAsyncInvocationProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CheckAsyncInvocationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CheckAsyncInvocationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CheckAsyncInvocationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CheckAsyncInvocationProperty {
            private final java.lang.Object checkInterval;
            private final java.lang.Object checkTimes;
            private final java.lang.Object enabled;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.checkInterval = software.amazon.jsii.Kernel.get(this, "checkInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.checkTimes = software.amazon.jsii.Kernel.get(this, "checkTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.checkInterval = java.util.Objects.requireNonNull(builder.checkInterval, "checkInterval is required");
                this.checkTimes = java.util.Objects.requireNonNull(builder.checkTimes, "checkTimes is required");
                this.enabled = java.util.Objects.requireNonNull(builder.enabled, "enabled is required");
            }

            @Override
            public final java.lang.Object getCheckInterval() {
                return this.checkInterval;
            }

            @Override
            public final java.lang.Object getCheckTimes() {
                return this.checkTimes;
            }

            @Override
            public final java.lang.Object getEnabled() {
                return this.enabled;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("checkInterval", om.valueToTree(this.getCheckInterval()));
                data.set("checkTimes", om.valueToTree(this.getCheckTimes()));
                data.set("enabled", om.valueToTree(this.getEnabled()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosFunctionInvoker.CheckAsyncInvocationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CheckAsyncInvocationProperty.Jsii$Proxy that = (CheckAsyncInvocationProperty.Jsii$Proxy) o;

                if (!checkInterval.equals(that.checkInterval)) return false;
                if (!checkTimes.equals(that.checkTimes)) return false;
                return this.enabled.equals(that.enabled);
            }

            @Override
            public final int hashCode() {
                int result = this.checkInterval.hashCode();
                result = 31 * result + (this.checkTimes.hashCode());
                result = 31 * result + (this.enabled.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.RosFunctionInvoker}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.RosFunctionInvoker> {
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
        private final com.aliyun.ros.cdk.fc3.RosFunctionInvokerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.RosFunctionInvokerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param functionName This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param functionName This parameter is required.
         */
        public Builder functionName(final com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param async This parameter is required.
         */
        public Builder async(final java.lang.Boolean async) {
            this.props.async(async);
            return this;
        }
        /**
         * @return {@code this}
         * @param async This parameter is required.
         */
        public Builder async(final com.aliyun.ros.cdk.core.IResolvable async) {
            this.props.async(async);
            return this;
        }

        /**
         * @return {@code this}
         * @param checkAsyncInvocation This parameter is required.
         */
        public Builder checkAsyncInvocation(final com.aliyun.ros.cdk.core.IResolvable checkAsyncInvocation) {
            this.props.checkAsyncInvocation(checkAsyncInvocation);
            return this;
        }
        /**
         * @return {@code this}
         * @param checkAsyncInvocation This parameter is required.
         */
        public Builder checkAsyncInvocation(final com.aliyun.ros.cdk.fc3.RosFunctionInvoker.CheckAsyncInvocationProperty checkAsyncInvocation) {
            this.props.checkAsyncInvocation(checkAsyncInvocation);
            return this;
        }

        /**
         * @return {@code this}
         * @param checkError This parameter is required.
         */
        public Builder checkError(final java.lang.Boolean checkError) {
            this.props.checkError(checkError);
            return this;
        }
        /**
         * @return {@code this}
         * @param checkError This parameter is required.
         */
        public Builder checkError(final com.aliyun.ros.cdk.core.IResolvable checkError) {
            this.props.checkError(checkError);
            return this;
        }

        /**
         * @return {@code this}
         * @param event This parameter is required.
         */
        public Builder event(final java.lang.String event) {
            this.props.event(event);
            return this;
        }
        /**
         * @return {@code this}
         * @param event This parameter is required.
         */
        public Builder event(final com.aliyun.ros.cdk.core.IResolvable event) {
            this.props.event(event);
            return this;
        }

        /**
         * @return {@code this}
         * @param executeVersion This parameter is required.
         */
        public Builder executeVersion(final java.lang.Number executeVersion) {
            this.props.executeVersion(executeVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param executeVersion This parameter is required.
         */
        public Builder executeVersion(final com.aliyun.ros.cdk.core.IResolvable executeVersion) {
            this.props.executeVersion(executeVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param qualifier This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }
        /**
         * @return {@code this}
         * @param qualifier This parameter is required.
         */
        public Builder qualifier(final com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceRegionId This parameter is required.
         */
        public Builder serviceRegionId(final java.lang.String serviceRegionId) {
            this.props.serviceRegionId(serviceRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceRegionId This parameter is required.
         */
        public Builder serviceRegionId(final com.aliyun.ros.cdk.core.IResolvable serviceRegionId) {
            this.props.serviceRegionId(serviceRegionId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.RosFunctionInvoker}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.RosFunctionInvoker build() {
            return new com.aliyun.ros.cdk.fc3.RosFunctionInvoker(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
