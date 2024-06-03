package com.aliyun.ros.cdk.cdn;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CDN::DomainConfig</code>, which is used to configure multiple domain names at a time.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.901Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosDomainConfig")
public class RosDomainConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDomainConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDomainConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cdn.RosDomainConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDomainConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.RosDomainConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDomainNames() {
        return software.amazon.jsii.Kernel.get(this, "domainNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainNames(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domainNames", java.util.Objects.requireNonNull(value, "domainNames is required"));
    }

    /**
     */
    public void setDomainNames(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainNames", java.util.Objects.requireNonNull(value, "domainNames is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFunctionList() {
        return software.amazon.jsii.Kernel.get(this, "functionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFunctionList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "functionList", value);
    }

    /**
     */
    public void setFunctionList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cdn.RosDomainConfig.FunctionListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cdn.RosDomainConfig.FunctionListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "functionList", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosDomainConfig.FunctionArgsProperty")
    @software.amazon.jsii.Jsii.Proxy(FunctionArgsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FunctionArgsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getArgName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getArgValue();

        /**
         * @return a {@link Builder} of {@link FunctionArgsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FunctionArgsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FunctionArgsProperty> {
            java.lang.Object argName;
            java.lang.Object argValue;

            /**
             * Sets the value of {@link FunctionArgsProperty#getArgName}
             * @param argName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder argName(java.lang.String argName) {
                this.argName = argName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionArgsProperty#getArgName}
             * @param argName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder argName(com.aliyun.ros.cdk.core.IResolvable argName) {
                this.argName = argName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionArgsProperty#getArgValue}
             * @param argValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder argValue(java.lang.String argValue) {
                this.argValue = argValue;
                return this;
            }

            /**
             * Sets the value of {@link FunctionArgsProperty#getArgValue}
             * @param argValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder argValue(com.aliyun.ros.cdk.core.IResolvable argValue) {
                this.argValue = argValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FunctionArgsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FunctionArgsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FunctionArgsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FunctionArgsProperty {
            private final java.lang.Object argName;
            private final java.lang.Object argValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.argName = software.amazon.jsii.Kernel.get(this, "argName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.argValue = software.amazon.jsii.Kernel.get(this, "argValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.argName = java.util.Objects.requireNonNull(builder.argName, "argName is required");
                this.argValue = java.util.Objects.requireNonNull(builder.argValue, "argValue is required");
            }

            @Override
            public final java.lang.Object getArgName() {
                return this.argName;
            }

            @Override
            public final java.lang.Object getArgValue() {
                return this.argValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("argName", om.valueToTree(this.getArgName()));
                data.set("argValue", om.valueToTree(this.getArgValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.RosDomainConfig.FunctionArgsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FunctionArgsProperty.Jsii$Proxy that = (FunctionArgsProperty.Jsii$Proxy) o;

                if (!argName.equals(that.argName)) return false;
                return this.argValue.equals(that.argValue);
            }

            @Override
            public final int hashCode() {
                int result = this.argName.hashCode();
                result = 31 * result + (this.argValue.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosDomainConfig.FunctionListProperty")
    @software.amazon.jsii.Jsii.Proxy(FunctionListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FunctionListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFunctionArgs();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getParentId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FunctionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FunctionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FunctionListProperty> {
            java.lang.Object functionArgs;
            java.lang.Object functionName;
            java.lang.Object parentId;

            /**
             * Sets the value of {@link FunctionListProperty#getFunctionArgs}
             * @param functionArgs the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionArgs(com.aliyun.ros.cdk.core.IResolvable functionArgs) {
                this.functionArgs = functionArgs;
                return this;
            }

            /**
             * Sets the value of {@link FunctionListProperty#getFunctionArgs}
             * @param functionArgs the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionArgs(java.util.List<? extends java.lang.Object> functionArgs) {
                this.functionArgs = functionArgs;
                return this;
            }

            /**
             * Sets the value of {@link FunctionListProperty#getFunctionName}
             * @param functionName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionName(java.lang.String functionName) {
                this.functionName = functionName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionListProperty#getFunctionName}
             * @param functionName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
                this.functionName = functionName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionListProperty#getParentId}
             * @param parentId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parentId(java.lang.String parentId) {
                this.parentId = parentId;
                return this;
            }

            /**
             * Sets the value of {@link FunctionListProperty#getParentId}
             * @param parentId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parentId(com.aliyun.ros.cdk.core.IResolvable parentId) {
                this.parentId = parentId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FunctionListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FunctionListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FunctionListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FunctionListProperty {
            private final java.lang.Object functionArgs;
            private final java.lang.Object functionName;
            private final java.lang.Object parentId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.functionArgs = software.amazon.jsii.Kernel.get(this, "functionArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parentId = software.amazon.jsii.Kernel.get(this, "parentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.functionArgs = java.util.Objects.requireNonNull(builder.functionArgs, "functionArgs is required");
                this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
                this.parentId = builder.parentId;
            }

            @Override
            public final java.lang.Object getFunctionArgs() {
                return this.functionArgs;
            }

            @Override
            public final java.lang.Object getFunctionName() {
                return this.functionName;
            }

            @Override
            public final java.lang.Object getParentId() {
                return this.parentId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("functionArgs", om.valueToTree(this.getFunctionArgs()));
                data.set("functionName", om.valueToTree(this.getFunctionName()));
                if (this.getParentId() != null) {
                    data.set("parentId", om.valueToTree(this.getParentId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.RosDomainConfig.FunctionListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FunctionListProperty.Jsii$Proxy that = (FunctionListProperty.Jsii$Proxy) o;

                if (!functionArgs.equals(that.functionArgs)) return false;
                if (!functionName.equals(that.functionName)) return false;
                return this.parentId != null ? this.parentId.equals(that.parentId) : that.parentId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.functionArgs.hashCode();
                result = 31 * result + (this.functionName.hashCode());
                result = 31 * result + (this.parentId != null ? this.parentId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cdn.RosDomainConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cdn.RosDomainConfig> {
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
        private final com.aliyun.ros.cdk.cdn.RosDomainConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cdn.RosDomainConfigProps.Builder();
        }

        /**
         * @return {@code this}
         * @param domainNames This parameter is required.
         */
        public Builder domainNames(final java.lang.String domainNames) {
            this.props.domainNames(domainNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainNames This parameter is required.
         */
        public Builder domainNames(final com.aliyun.ros.cdk.core.IResolvable domainNames) {
            this.props.domainNames(domainNames);
            return this;
        }

        /**
         * @return {@code this}
         * @param functionList This parameter is required.
         */
        public Builder functionList(final com.aliyun.ros.cdk.core.IResolvable functionList) {
            this.props.functionList(functionList);
            return this;
        }
        /**
         * @return {@code this}
         * @param functionList This parameter is required.
         */
        public Builder functionList(final java.util.List<? extends java.lang.Object> functionList) {
            this.props.functionList(functionList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cdn.RosDomainConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.cdn.RosDomainConfig build() {
            return new com.aliyun.ros.cdk.cdn.RosDomainConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
