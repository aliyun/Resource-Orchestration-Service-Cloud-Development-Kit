package com.aliyun.ros.cdk.apig;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::APIG::ConsumerAuthorizationRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.428Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumerAuthorizationRule")
public class RosConsumerAuthorizationRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosConsumerAuthorizationRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosConsumerAuthorizationRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosConsumerAuthorizationRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConsumerAuthorizationRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerAuthorizationRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConsumerId() {
        return software.amazon.jsii.Kernel.get(this, "consumerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConsumerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "consumerId", java.util.Objects.requireNonNull(value, "consumerId is required"));
    }

    /**
     */
    public void setConsumerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "consumerId", java.util.Objects.requireNonNull(value, "consumerId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getResourceIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "resourceIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceIdentifier(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceIdentifier", java.util.Objects.requireNonNull(value, "resourceIdentifier is required"));
    }

    /**
     */
    public void setResourceIdentifier(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty value) {
        software.amazon.jsii.Kernel.set(this, "resourceIdentifier", java.util.Objects.requireNonNull(value, "resourceIdentifier is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getResourceType() {
        return software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceType", java.util.Objects.requireNonNull(value, "resourceType is required"));
    }

    /**
     */
    public void setResourceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceType", java.util.Objects.requireNonNull(value, "resourceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExpireMode() {
        return software.amazon.jsii.Kernel.get(this, "expireMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExpireMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "expireMode", value);
    }

    /**
     */
    public void setExpireMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "expireMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExpireTimestamp() {
        return software.amazon.jsii.Kernel.get(this, "expireTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExpireTimestamp(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "expireTimestamp", value);
    }

    /**
     */
    public void setExpireTimestamp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "expireTimestamp", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourceIdentifierProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourceIdentifierProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getParentResourceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResources() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResourceIdentifierProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourceIdentifierProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourceIdentifierProperty> {
            java.lang.Object environmentId;
            java.lang.Object resourceId;
            java.lang.Object parentResourceId;
            java.lang.Object resources;

            /**
             * Sets the value of {@link ResourceIdentifierProperty#getEnvironmentId}
             * @param environmentId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentId(java.lang.String environmentId) {
                this.environmentId = environmentId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceIdentifierProperty#getEnvironmentId}
             * @param environmentId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
                this.environmentId = environmentId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceIdentifierProperty#getResourceId}
             * @param resourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceId(java.lang.String resourceId) {
                this.resourceId = resourceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceIdentifierProperty#getResourceId}
             * @param resourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
                this.resourceId = resourceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceIdentifierProperty#getParentResourceId}
             * @param parentResourceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parentResourceId(java.lang.String parentResourceId) {
                this.parentResourceId = parentResourceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceIdentifierProperty#getParentResourceId}
             * @param parentResourceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parentResourceId(com.aliyun.ros.cdk.core.IResolvable parentResourceId) {
                this.parentResourceId = parentResourceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceIdentifierProperty#getResources}
             * @param resources the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
                this.resources = resources;
                return this;
            }

            /**
             * Sets the value of {@link ResourceIdentifierProperty#getResources}
             * @param resources the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resources(java.util.List<? extends java.lang.Object> resources) {
                this.resources = resources;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourceIdentifierProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourceIdentifierProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourceIdentifierProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceIdentifierProperty {
            private final java.lang.Object environmentId;
            private final java.lang.Object resourceId;
            private final java.lang.Object parentResourceId;
            private final java.lang.Object resources;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.parentResourceId = software.amazon.jsii.Kernel.get(this, "parentResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.environmentId = java.util.Objects.requireNonNull(builder.environmentId, "environmentId is required");
                this.resourceId = java.util.Objects.requireNonNull(builder.resourceId, "resourceId is required");
                this.parentResourceId = builder.parentResourceId;
                this.resources = builder.resources;
            }

            @Override
            public final java.lang.Object getEnvironmentId() {
                return this.environmentId;
            }

            @Override
            public final java.lang.Object getResourceId() {
                return this.resourceId;
            }

            @Override
            public final java.lang.Object getParentResourceId() {
                return this.parentResourceId;
            }

            @Override
            public final java.lang.Object getResources() {
                return this.resources;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
                data.set("resourceId", om.valueToTree(this.getResourceId()));
                if (this.getParentResourceId() != null) {
                    data.set("parentResourceId", om.valueToTree(this.getParentResourceId()));
                }
                if (this.getResources() != null) {
                    data.set("resources", om.valueToTree(this.getResources()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourceIdentifierProperty.Jsii$Proxy that = (ResourceIdentifierProperty.Jsii$Proxy) o;

                if (!environmentId.equals(that.environmentId)) return false;
                if (!resourceId.equals(that.resourceId)) return false;
                if (this.parentResourceId != null ? !this.parentResourceId.equals(that.parentResourceId) : that.parentResourceId != null) return false;
                return this.resources != null ? this.resources.equals(that.resources) : that.resources == null;
            }

            @Override
            public final int hashCode() {
                int result = this.environmentId.hashCode();
                result = 31 * result + (this.resourceId.hashCode());
                result = 31 * result + (this.parentResourceId != null ? this.parentResourceId.hashCode() : 0);
                result = 31 * result + (this.resources != null ? this.resources.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule> {
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
        private final com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param consumerId This parameter is required.
         */
        public Builder consumerId(final java.lang.String consumerId) {
            this.props.consumerId(consumerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param consumerId This parameter is required.
         */
        public Builder consumerId(final com.aliyun.ros.cdk.core.IResolvable consumerId) {
            this.props.consumerId(consumerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceIdentifier This parameter is required.
         */
        public Builder resourceIdentifier(final com.aliyun.ros.cdk.core.IResolvable resourceIdentifier) {
            this.props.resourceIdentifier(resourceIdentifier);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceIdentifier This parameter is required.
         */
        public Builder resourceIdentifier(final com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty resourceIdentifier) {
            this.props.resourceIdentifier(resourceIdentifier);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceType This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceType This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param expireMode This parameter is required.
         */
        public Builder expireMode(final java.lang.String expireMode) {
            this.props.expireMode(expireMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param expireMode This parameter is required.
         */
        public Builder expireMode(final com.aliyun.ros.cdk.core.IResolvable expireMode) {
            this.props.expireMode(expireMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param expireTimestamp This parameter is required.
         */
        public Builder expireTimestamp(final java.lang.Number expireTimestamp) {
            this.props.expireTimestamp(expireTimestamp);
            return this;
        }
        /**
         * @return {@code this}
         * @param expireTimestamp This parameter is required.
         */
        public Builder expireTimestamp(final com.aliyun.ros.cdk.core.IResolvable expireTimestamp) {
            this.props.expireTimestamp(expireTimestamp);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule build() {
            return new com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
