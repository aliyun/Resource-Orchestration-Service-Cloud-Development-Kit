package com.aliyun.ros.cdk.bailian;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Bailian::ApiKey</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:34:25.363Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bailian.$Module.class, fqn = "@alicloud/ros-cdk-bailian.RosApiKey")
public class RosApiKey extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApiKey(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApiKey(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.bailian.RosApiKey.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApiKey(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bailian.RosApiKeyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApiKeyId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiKeyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKey() {
        return software.amazon.jsii.Kernel.get(this, "attrKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthSetModel() {
        return software.amazon.jsii.Kernel.get(this, "authSetModel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthSetModel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.bailian.RosApiKey.AuthSetModelProperty value) {
        software.amazon.jsii.Kernel.set(this, "authSetModel", value);
    }

    /**
     */
    public void setAuthSetModel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authSetModel", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bailian.$Module.class, fqn = "@alicloud/ros-cdk-bailian.RosApiKey.AuthSetModelProperty")
    @software.amazon.jsii.Jsii.Proxy(AuthSetModelProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AuthSetModelProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAccessIps() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuthSetMode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AuthSetModelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AuthSetModelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AuthSetModelProperty> {
            java.lang.Object accessIps;
            java.lang.Object authSetMode;

            /**
             * Sets the value of {@link AuthSetModelProperty#getAccessIps}
             * @param accessIps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accessIps(com.aliyun.ros.cdk.core.IResolvable accessIps) {
                this.accessIps = accessIps;
                return this;
            }

            /**
             * Sets the value of {@link AuthSetModelProperty#getAccessIps}
             * @param accessIps the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accessIps(java.util.List<? extends java.lang.Object> accessIps) {
                this.accessIps = accessIps;
                return this;
            }

            /**
             * Sets the value of {@link AuthSetModelProperty#getAuthSetMode}
             * @param authSetMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authSetMode(java.lang.String authSetMode) {
                this.authSetMode = authSetMode;
                return this;
            }

            /**
             * Sets the value of {@link AuthSetModelProperty#getAuthSetMode}
             * @param authSetMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authSetMode(com.aliyun.ros.cdk.core.IResolvable authSetMode) {
                this.authSetMode = authSetMode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AuthSetModelProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AuthSetModelProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AuthSetModelProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuthSetModelProperty {
            private final java.lang.Object accessIps;
            private final java.lang.Object authSetMode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.accessIps = software.amazon.jsii.Kernel.get(this, "accessIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.authSetMode = software.amazon.jsii.Kernel.get(this, "authSetMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.accessIps = builder.accessIps;
                this.authSetMode = builder.authSetMode;
            }

            @Override
            public final java.lang.Object getAccessIps() {
                return this.accessIps;
            }

            @Override
            public final java.lang.Object getAuthSetMode() {
                return this.authSetMode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAccessIps() != null) {
                    data.set("accessIps", om.valueToTree(this.getAccessIps()));
                }
                if (this.getAuthSetMode() != null) {
                    data.set("authSetMode", om.valueToTree(this.getAuthSetMode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bailian.RosApiKey.AuthSetModelProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AuthSetModelProperty.Jsii$Proxy that = (AuthSetModelProperty.Jsii$Proxy) o;

                if (this.accessIps != null ? !this.accessIps.equals(that.accessIps) : that.accessIps != null) return false;
                return this.authSetMode != null ? this.authSetMode.equals(that.authSetMode) : that.authSetMode == null;
            }

            @Override
            public final int hashCode() {
                int result = this.accessIps != null ? this.accessIps.hashCode() : 0;
                result = 31 * result + (this.authSetMode != null ? this.authSetMode.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bailian.RosApiKey}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bailian.RosApiKey> {
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
        private final com.aliyun.ros.cdk.bailian.RosApiKeyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bailian.RosApiKeyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param authSetModel This parameter is required.
         */
        public Builder authSetModel(final com.aliyun.ros.cdk.bailian.RosApiKey.AuthSetModelProperty authSetModel) {
            this.props.authSetModel(authSetModel);
            return this;
        }
        /**
         * @return {@code this}
         * @param authSetModel This parameter is required.
         */
        public Builder authSetModel(final com.aliyun.ros.cdk.core.IResolvable authSetModel) {
            this.props.authSetModel(authSetModel);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bailian.RosApiKey}.
         */
        @Override
        public com.aliyun.ros.cdk.bailian.RosApiKey build() {
            return new com.aliyun.ros.cdk.bailian.RosApiKey(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
