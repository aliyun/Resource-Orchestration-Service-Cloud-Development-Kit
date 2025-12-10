package com.aliyun.ros.cdk.fc3;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::FC3::AsyncInvokeConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.044Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig")
public class RosAsyncInvokeConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAsyncInvokeConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAsyncInvokeConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAsyncInvokeConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAsyncTask() {
        return software.amazon.jsii.Kernel.get(this, "asyncTask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAsyncTask(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "asyncTask", value);
    }

    /**
     */
    public void setAsyncTask(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "asyncTask", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationConfig() {
        return software.amazon.jsii.Kernel.get(this, "destinationConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationConfig", value);
    }

    /**
     */
    public void setDestinationConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig.DestinationConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "destinationConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxAsyncEventAgeInSeconds() {
        return software.amazon.jsii.Kernel.get(this, "maxAsyncEventAgeInSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxAsyncEventAgeInSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxAsyncEventAgeInSeconds", value);
    }

    /**
     */
    public void setMaxAsyncEventAgeInSeconds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxAsyncEventAgeInSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxAsyncRetryAttempts() {
        return software.amazon.jsii.Kernel.get(this, "maxAsyncRetryAttempts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxAsyncRetryAttempts(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxAsyncRetryAttempts", value);
    }

    /**
     */
    public void setMaxAsyncRetryAttempts(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxAsyncRetryAttempts", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.DestinationConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(DestinationConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DestinationConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnFailure() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOnSuccess() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DestinationConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DestinationConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DestinationConfigProperty> {
            java.lang.Object onFailure;
            java.lang.Object onSuccess;

            /**
             * Sets the value of {@link DestinationConfigProperty#getOnFailure}
             * @param onFailure the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onFailure(com.aliyun.ros.cdk.core.IResolvable onFailure) {
                this.onFailure = onFailure;
                return this;
            }

            /**
             * Sets the value of {@link DestinationConfigProperty#getOnFailure}
             * @param onFailure the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onFailure(com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig.OnFailureProperty onFailure) {
                this.onFailure = onFailure;
                return this;
            }

            /**
             * Sets the value of {@link DestinationConfigProperty#getOnSuccess}
             * @param onSuccess the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onSuccess(com.aliyun.ros.cdk.core.IResolvable onSuccess) {
                this.onSuccess = onSuccess;
                return this;
            }

            /**
             * Sets the value of {@link DestinationConfigProperty#getOnSuccess}
             * @param onSuccess the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder onSuccess(com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig.OnSuccessProperty onSuccess) {
                this.onSuccess = onSuccess;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DestinationConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DestinationConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DestinationConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DestinationConfigProperty {
            private final java.lang.Object onFailure;
            private final java.lang.Object onSuccess;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.onFailure = software.amazon.jsii.Kernel.get(this, "onFailure", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.onSuccess = software.amazon.jsii.Kernel.get(this, "onSuccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.onFailure = builder.onFailure;
                this.onSuccess = builder.onSuccess;
            }

            @Override
            public final java.lang.Object getOnFailure() {
                return this.onFailure;
            }

            @Override
            public final java.lang.Object getOnSuccess() {
                return this.onSuccess;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOnFailure() != null) {
                    data.set("onFailure", om.valueToTree(this.getOnFailure()));
                }
                if (this.getOnSuccess() != null) {
                    data.set("onSuccess", om.valueToTree(this.getOnSuccess()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.DestinationConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DestinationConfigProperty.Jsii$Proxy that = (DestinationConfigProperty.Jsii$Proxy) o;

                if (this.onFailure != null ? !this.onFailure.equals(that.onFailure) : that.onFailure != null) return false;
                return this.onSuccess != null ? this.onSuccess.equals(that.onSuccess) : that.onSuccess == null;
            }

            @Override
            public final int hashCode() {
                int result = this.onFailure != null ? this.onFailure.hashCode() : 0;
                result = 31 * result + (this.onSuccess != null ? this.onSuccess.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.OnFailureProperty")
    @software.amazon.jsii.Jsii.Proxy(OnFailureProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OnFailureProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDestination();

        /**
         * @return a {@link Builder} of {@link OnFailureProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OnFailureProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OnFailureProperty> {
            java.lang.Object destination;

            /**
             * Sets the value of {@link OnFailureProperty#getDestination}
             * @param destination the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(java.lang.String destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Sets the value of {@link OnFailureProperty#getDestination}
             * @param destination the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OnFailureProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OnFailureProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OnFailureProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OnFailureProperty {
            private final java.lang.Object destination;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.destination = software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.destination = java.util.Objects.requireNonNull(builder.destination, "destination is required");
            }

            @Override
            public final java.lang.Object getDestination() {
                return this.destination;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("destination", om.valueToTree(this.getDestination()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.OnFailureProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OnFailureProperty.Jsii$Proxy that = (OnFailureProperty.Jsii$Proxy) o;

                return this.destination.equals(that.destination);
            }

            @Override
            public final int hashCode() {
                int result = this.destination.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.OnSuccessProperty")
    @software.amazon.jsii.Jsii.Proxy(OnSuccessProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OnSuccessProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDestination();

        /**
         * @return a {@link Builder} of {@link OnSuccessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OnSuccessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OnSuccessProperty> {
            java.lang.Object destination;

            /**
             * Sets the value of {@link OnSuccessProperty#getDestination}
             * @param destination the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(java.lang.String destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Sets the value of {@link OnSuccessProperty#getDestination}
             * @param destination the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OnSuccessProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OnSuccessProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OnSuccessProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OnSuccessProperty {
            private final java.lang.Object destination;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.destination = software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.destination = java.util.Objects.requireNonNull(builder.destination, "destination is required");
            }

            @Override
            public final java.lang.Object getDestination() {
                return this.destination;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("destination", om.valueToTree(this.getDestination()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.OnSuccessProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OnSuccessProperty.Jsii$Proxy that = (OnSuccessProperty.Jsii$Proxy) o;

                return this.destination.equals(that.destination);
            }

            @Override
            public final int hashCode() {
                int result = this.destination.hashCode();
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig> {
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
        private final com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfigProps.Builder();
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
         * @param asyncTask This parameter is required.
         */
        public Builder asyncTask(final java.lang.Boolean asyncTask) {
            this.props.asyncTask(asyncTask);
            return this;
        }
        /**
         * @return {@code this}
         * @param asyncTask This parameter is required.
         */
        public Builder asyncTask(final com.aliyun.ros.cdk.core.IResolvable asyncTask) {
            this.props.asyncTask(asyncTask);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationConfig This parameter is required.
         */
        public Builder destinationConfig(final com.aliyun.ros.cdk.core.IResolvable destinationConfig) {
            this.props.destinationConfig(destinationConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationConfig This parameter is required.
         */
        public Builder destinationConfig(final com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig.DestinationConfigProperty destinationConfig) {
            this.props.destinationConfig(destinationConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxAsyncEventAgeInSeconds This parameter is required.
         */
        public Builder maxAsyncEventAgeInSeconds(final java.lang.Number maxAsyncEventAgeInSeconds) {
            this.props.maxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxAsyncEventAgeInSeconds This parameter is required.
         */
        public Builder maxAsyncEventAgeInSeconds(final com.aliyun.ros.cdk.core.IResolvable maxAsyncEventAgeInSeconds) {
            this.props.maxAsyncEventAgeInSeconds(maxAsyncEventAgeInSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxAsyncRetryAttempts This parameter is required.
         */
        public Builder maxAsyncRetryAttempts(final java.lang.Number maxAsyncRetryAttempts) {
            this.props.maxAsyncRetryAttempts(maxAsyncRetryAttempts);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxAsyncRetryAttempts This parameter is required.
         */
        public Builder maxAsyncRetryAttempts(final com.aliyun.ros.cdk.core.IResolvable maxAsyncRetryAttempts) {
            this.props.maxAsyncRetryAttempts(maxAsyncRetryAttempts);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig build() {
            return new com.aliyun.ros.cdk.fc3.RosAsyncInvokeConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
