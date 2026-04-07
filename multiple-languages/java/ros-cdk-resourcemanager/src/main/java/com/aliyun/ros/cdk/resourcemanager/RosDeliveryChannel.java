package com.aliyun.ros.cdk.resourcemanager;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ResourceManager::DeliveryChannel</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:29.508Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel")
public class RosDeliveryChannel extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDeliveryChannel(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDeliveryChannel(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDeliveryChannel(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannelProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryChannelDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryChannelFilter() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelFilter", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryChannelId() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryChannelName() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryChannelName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceChangeDelivery() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceChangeDelivery", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceSnapshotDelivery() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelFilter() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelFilter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelFilter", java.util.Objects.requireNonNull(value, "deliveryChannelFilter is required"));
    }

    /**
     */
    public void setDeliveryChannelFilter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelFilter", java.util.Objects.requireNonNull(value, "deliveryChannelFilter is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelName() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelName", java.util.Objects.requireNonNull(value, "deliveryChannelName is required"));
    }

    /**
     */
    public void setDeliveryChannelName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelName", java.util.Objects.requireNonNull(value, "deliveryChannelName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryChannelDescription() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelDescription", value);
    }

    /**
     */
    public void setDeliveryChannelDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryChannelId() {
        return software.amazon.jsii.Kernel.get(this, "deliveryChannelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryChannelId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelId", value);
    }

    /**
     */
    public void setDeliveryChannelId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryChannelId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnabledResourceChangeDelivery() {
        return software.amazon.jsii.Kernel.get(this, "enabledResourceChangeDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnabledResourceChangeDelivery(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enabledResourceChangeDelivery", value);
    }

    /**
     */
    public void setEnabledResourceChangeDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enabledResourceChangeDelivery", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnabledResourceSnapshotDelivery() {
        return software.amazon.jsii.Kernel.get(this, "enabledResourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnabledResourceSnapshotDelivery(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enabledResourceSnapshotDelivery", value);
    }

    /**
     */
    public void setEnabledResourceSnapshotDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enabledResourceSnapshotDelivery", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceChangeDelivery() {
        return software.amazon.jsii.Kernel.get(this, "resourceChangeDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceChangeDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceChangeDelivery", value);
    }

    /**
     */
    public void setResourceChangeDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty value) {
        software.amazon.jsii.Kernel.set(this, "resourceChangeDelivery", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceSnapshotDelivery() {
        return software.amazon.jsii.Kernel.get(this, "resourceSnapshotDelivery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceSnapshotDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceSnapshotDelivery", value);
    }

    /**
     */
    public void setResourceSnapshotDelivery(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty value) {
        software.amazon.jsii.Kernel.set(this, "resourceSnapshotDelivery", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty")
    @software.amazon.jsii.Jsii.Proxy(DeliveryChannelFilterProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DeliveryChannelFilterProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAccountScopes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceTypes() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DeliveryChannelFilterProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DeliveryChannelFilterProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DeliveryChannelFilterProperty> {
            java.lang.Object accountScopes;
            java.lang.Object resourceTypes;

            /**
             * Sets the value of {@link DeliveryChannelFilterProperty#getAccountScopes}
             * @param accountScopes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accountScopes(com.aliyun.ros.cdk.core.IResolvable accountScopes) {
                this.accountScopes = accountScopes;
                return this;
            }

            /**
             * Sets the value of {@link DeliveryChannelFilterProperty#getAccountScopes}
             * @param accountScopes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder accountScopes(java.util.List<? extends java.lang.Object> accountScopes) {
                this.accountScopes = accountScopes;
                return this;
            }

            /**
             * Sets the value of {@link DeliveryChannelFilterProperty#getResourceTypes}
             * @param resourceTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceTypes(com.aliyun.ros.cdk.core.IResolvable resourceTypes) {
                this.resourceTypes = resourceTypes;
                return this;
            }

            /**
             * Sets the value of {@link DeliveryChannelFilterProperty#getResourceTypes}
             * @param resourceTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceTypes(java.util.List<? extends java.lang.Object> resourceTypes) {
                this.resourceTypes = resourceTypes;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DeliveryChannelFilterProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DeliveryChannelFilterProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DeliveryChannelFilterProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeliveryChannelFilterProperty {
            private final java.lang.Object accountScopes;
            private final java.lang.Object resourceTypes;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.accountScopes = software.amazon.jsii.Kernel.get(this, "accountScopes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceTypes = software.amazon.jsii.Kernel.get(this, "resourceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.accountScopes = builder.accountScopes;
                this.resourceTypes = builder.resourceTypes;
            }

            @Override
            public final java.lang.Object getAccountScopes() {
                return this.accountScopes;
            }

            @Override
            public final java.lang.Object getResourceTypes() {
                return this.resourceTypes;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAccountScopes() != null) {
                    data.set("accountScopes", om.valueToTree(this.getAccountScopes()));
                }
                if (this.getResourceTypes() != null) {
                    data.set("resourceTypes", om.valueToTree(this.getResourceTypes()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DeliveryChannelFilterProperty.Jsii$Proxy that = (DeliveryChannelFilterProperty.Jsii$Proxy) o;

                if (this.accountScopes != null ? !this.accountScopes.equals(that.accountScopes) : that.accountScopes != null) return false;
                return this.resourceTypes != null ? this.resourceTypes.equals(that.resourceTypes) : that.resourceTypes == null;
            }

            @Override
            public final int hashCode() {
                int result = this.accountScopes != null ? this.accountScopes.hashCode() : 0;
                result = 31 * result + (this.resourceTypes != null ? this.resourceTypes.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourceChangeDeliveryProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourceChangeDeliveryProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlsProperties() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTargetArn() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResourceChangeDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourceChangeDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourceChangeDeliveryProperty> {
            java.lang.Object slsProperties;
            java.lang.Object targetArn;

            /**
             * Sets the value of {@link ResourceChangeDeliveryProperty#getSlsProperties}
             * @param slsProperties the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProperties(com.aliyun.ros.cdk.core.IResolvable slsProperties) {
                this.slsProperties = slsProperties;
                return this;
            }

            /**
             * Sets the value of {@link ResourceChangeDeliveryProperty#getSlsProperties}
             * @param slsProperties the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProperties(com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.SlsPropertiesProperty slsProperties) {
                this.slsProperties = slsProperties;
                return this;
            }

            /**
             * Sets the value of {@link ResourceChangeDeliveryProperty#getTargetArn}
             * @param targetArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetArn(java.lang.String targetArn) {
                this.targetArn = targetArn;
                return this;
            }

            /**
             * Sets the value of {@link ResourceChangeDeliveryProperty#getTargetArn}
             * @param targetArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetArn(com.aliyun.ros.cdk.core.IResolvable targetArn) {
                this.targetArn = targetArn;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourceChangeDeliveryProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourceChangeDeliveryProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourceChangeDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceChangeDeliveryProperty {
            private final java.lang.Object slsProperties;
            private final java.lang.Object targetArn;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.slsProperties = software.amazon.jsii.Kernel.get(this, "slsProperties", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetArn = software.amazon.jsii.Kernel.get(this, "targetArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.slsProperties = builder.slsProperties;
                this.targetArn = builder.targetArn;
            }

            @Override
            public final java.lang.Object getSlsProperties() {
                return this.slsProperties;
            }

            @Override
            public final java.lang.Object getTargetArn() {
                return this.targetArn;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getSlsProperties() != null) {
                    data.set("slsProperties", om.valueToTree(this.getSlsProperties()));
                }
                if (this.getTargetArn() != null) {
                    data.set("targetArn", om.valueToTree(this.getTargetArn()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourceChangeDeliveryProperty.Jsii$Proxy that = (ResourceChangeDeliveryProperty.Jsii$Proxy) o;

                if (this.slsProperties != null ? !this.slsProperties.equals(that.slsProperties) : that.slsProperties != null) return false;
                return this.targetArn != null ? this.targetArn.equals(that.targetArn) : that.targetArn == null;
            }

            @Override
            public final int hashCode() {
                int result = this.slsProperties != null ? this.slsProperties.hashCode() : 0;
                result = 31 * result + (this.targetArn != null ? this.targetArn.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourceSnapshotDeliveryProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourceSnapshotDeliveryProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomExpression() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryTime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSlsProperties() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTargetArn() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResourceSnapshotDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourceSnapshotDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourceSnapshotDeliveryProperty> {
            java.lang.Object customExpression;
            java.lang.Object deliveryTime;
            java.lang.Object slsProperties;
            java.lang.Object targetArn;

            /**
             * Sets the value of {@link ResourceSnapshotDeliveryProperty#getCustomExpression}
             * @param customExpression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customExpression(java.lang.String customExpression) {
                this.customExpression = customExpression;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSnapshotDeliveryProperty#getCustomExpression}
             * @param customExpression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customExpression(com.aliyun.ros.cdk.core.IResolvable customExpression) {
                this.customExpression = customExpression;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSnapshotDeliveryProperty#getDeliveryTime}
             * @param deliveryTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deliveryTime(java.lang.String deliveryTime) {
                this.deliveryTime = deliveryTime;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSnapshotDeliveryProperty#getDeliveryTime}
             * @param deliveryTime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deliveryTime(com.aliyun.ros.cdk.core.IResolvable deliveryTime) {
                this.deliveryTime = deliveryTime;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSnapshotDeliveryProperty#getSlsProperties}
             * @param slsProperties the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProperties(com.aliyun.ros.cdk.core.IResolvable slsProperties) {
                this.slsProperties = slsProperties;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSnapshotDeliveryProperty#getSlsProperties}
             * @param slsProperties the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder slsProperties(com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty slsProperties) {
                this.slsProperties = slsProperties;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSnapshotDeliveryProperty#getTargetArn}
             * @param targetArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetArn(java.lang.String targetArn) {
                this.targetArn = targetArn;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSnapshotDeliveryProperty#getTargetArn}
             * @param targetArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetArn(com.aliyun.ros.cdk.core.IResolvable targetArn) {
                this.targetArn = targetArn;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourceSnapshotDeliveryProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourceSnapshotDeliveryProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourceSnapshotDeliveryProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceSnapshotDeliveryProperty {
            private final java.lang.Object customExpression;
            private final java.lang.Object deliveryTime;
            private final java.lang.Object slsProperties;
            private final java.lang.Object targetArn;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.customExpression = software.amazon.jsii.Kernel.get(this, "customExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.deliveryTime = software.amazon.jsii.Kernel.get(this, "deliveryTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.slsProperties = software.amazon.jsii.Kernel.get(this, "slsProperties", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetArn = software.amazon.jsii.Kernel.get(this, "targetArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.customExpression = builder.customExpression;
                this.deliveryTime = builder.deliveryTime;
                this.slsProperties = builder.slsProperties;
                this.targetArn = builder.targetArn;
            }

            @Override
            public final java.lang.Object getCustomExpression() {
                return this.customExpression;
            }

            @Override
            public final java.lang.Object getDeliveryTime() {
                return this.deliveryTime;
            }

            @Override
            public final java.lang.Object getSlsProperties() {
                return this.slsProperties;
            }

            @Override
            public final java.lang.Object getTargetArn() {
                return this.targetArn;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCustomExpression() != null) {
                    data.set("customExpression", om.valueToTree(this.getCustomExpression()));
                }
                if (this.getDeliveryTime() != null) {
                    data.set("deliveryTime", om.valueToTree(this.getDeliveryTime()));
                }
                if (this.getSlsProperties() != null) {
                    data.set("slsProperties", om.valueToTree(this.getSlsProperties()));
                }
                if (this.getTargetArn() != null) {
                    data.set("targetArn", om.valueToTree(this.getTargetArn()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourceSnapshotDeliveryProperty.Jsii$Proxy that = (ResourceSnapshotDeliveryProperty.Jsii$Proxy) o;

                if (this.customExpression != null ? !this.customExpression.equals(that.customExpression) : that.customExpression != null) return false;
                if (this.deliveryTime != null ? !this.deliveryTime.equals(that.deliveryTime) : that.deliveryTime != null) return false;
                if (this.slsProperties != null ? !this.slsProperties.equals(that.slsProperties) : that.slsProperties != null) return false;
                return this.targetArn != null ? this.targetArn.equals(that.targetArn) : that.targetArn == null;
            }

            @Override
            public final int hashCode() {
                int result = this.customExpression != null ? this.customExpression.hashCode() : 0;
                result = 31 * result + (this.deliveryTime != null ? this.deliveryTime.hashCode() : 0);
                result = 31 * result + (this.slsProperties != null ? this.slsProperties.hashCode() : 0);
                result = 31 * result + (this.targetArn != null ? this.targetArn.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourceSnapshotDeliverySlsPropertiesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourceSnapshotDeliverySlsPropertiesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOversizedDataOssTargetArn() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResourceSnapshotDeliverySlsPropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourceSnapshotDeliverySlsPropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourceSnapshotDeliverySlsPropertiesProperty> {
            java.lang.Object oversizedDataOssTargetArn;

            /**
             * Sets the value of {@link ResourceSnapshotDeliverySlsPropertiesProperty#getOversizedDataOssTargetArn}
             * @param oversizedDataOssTargetArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oversizedDataOssTargetArn(java.lang.String oversizedDataOssTargetArn) {
                this.oversizedDataOssTargetArn = oversizedDataOssTargetArn;
                return this;
            }

            /**
             * Sets the value of {@link ResourceSnapshotDeliverySlsPropertiesProperty#getOversizedDataOssTargetArn}
             * @param oversizedDataOssTargetArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oversizedDataOssTargetArn(com.aliyun.ros.cdk.core.IResolvable oversizedDataOssTargetArn) {
                this.oversizedDataOssTargetArn = oversizedDataOssTargetArn;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourceSnapshotDeliverySlsPropertiesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourceSnapshotDeliverySlsPropertiesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourceSnapshotDeliverySlsPropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceSnapshotDeliverySlsPropertiesProperty {
            private final java.lang.Object oversizedDataOssTargetArn;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.oversizedDataOssTargetArn = software.amazon.jsii.Kernel.get(this, "oversizedDataOssTargetArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.oversizedDataOssTargetArn = builder.oversizedDataOssTargetArn;
            }

            @Override
            public final java.lang.Object getOversizedDataOssTargetArn() {
                return this.oversizedDataOssTargetArn;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOversizedDataOssTargetArn() != null) {
                    data.set("oversizedDataOssTargetArn", om.valueToTree(this.getOversizedDataOssTargetArn()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourceSnapshotDeliverySlsPropertiesProperty.Jsii$Proxy that = (ResourceSnapshotDeliverySlsPropertiesProperty.Jsii$Proxy) o;

                return this.oversizedDataOssTargetArn != null ? this.oversizedDataOssTargetArn.equals(that.oversizedDataOssTargetArn) : that.oversizedDataOssTargetArn == null;
            }

            @Override
            public final int hashCode() {
                int result = this.oversizedDataOssTargetArn != null ? this.oversizedDataOssTargetArn.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty")
    @software.amazon.jsii.Jsii.Proxy(SlsPropertiesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SlsPropertiesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOversizedDataOssTargetArn() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SlsPropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SlsPropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SlsPropertiesProperty> {
            java.lang.Object oversizedDataOssTargetArn;

            /**
             * Sets the value of {@link SlsPropertiesProperty#getOversizedDataOssTargetArn}
             * @param oversizedDataOssTargetArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oversizedDataOssTargetArn(java.lang.String oversizedDataOssTargetArn) {
                this.oversizedDataOssTargetArn = oversizedDataOssTargetArn;
                return this;
            }

            /**
             * Sets the value of {@link SlsPropertiesProperty#getOversizedDataOssTargetArn}
             * @param oversizedDataOssTargetArn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oversizedDataOssTargetArn(com.aliyun.ros.cdk.core.IResolvable oversizedDataOssTargetArn) {
                this.oversizedDataOssTargetArn = oversizedDataOssTargetArn;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SlsPropertiesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SlsPropertiesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SlsPropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SlsPropertiesProperty {
            private final java.lang.Object oversizedDataOssTargetArn;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.oversizedDataOssTargetArn = software.amazon.jsii.Kernel.get(this, "oversizedDataOssTargetArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.oversizedDataOssTargetArn = builder.oversizedDataOssTargetArn;
            }

            @Override
            public final java.lang.Object getOversizedDataOssTargetArn() {
                return this.oversizedDataOssTargetArn;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getOversizedDataOssTargetArn() != null) {
                    data.set("oversizedDataOssTargetArn", om.valueToTree(this.getOversizedDataOssTargetArn()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SlsPropertiesProperty.Jsii$Proxy that = (SlsPropertiesProperty.Jsii$Proxy) o;

                return this.oversizedDataOssTargetArn != null ? this.oversizedDataOssTargetArn.equals(that.oversizedDataOssTargetArn) : that.oversizedDataOssTargetArn == null;
            }

            @Override
            public final int hashCode() {
                int result = this.oversizedDataOssTargetArn != null ? this.oversizedDataOssTargetArn.hashCode() : 0;
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel> {
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
        private final com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannelProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannelProps.Builder();
        }

        /**
         * @return {@code this}
         * @param deliveryChannelFilter This parameter is required.
         */
        public Builder deliveryChannelFilter(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelFilter) {
            this.props.deliveryChannelFilter(deliveryChannelFilter);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelFilter This parameter is required.
         */
        public Builder deliveryChannelFilter(final com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty deliveryChannelFilter) {
            this.props.deliveryChannelFilter(deliveryChannelFilter);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryChannelName This parameter is required.
         */
        public Builder deliveryChannelName(final java.lang.String deliveryChannelName) {
            this.props.deliveryChannelName(deliveryChannelName);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelName This parameter is required.
         */
        public Builder deliveryChannelName(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelName) {
            this.props.deliveryChannelName(deliveryChannelName);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryChannelDescription This parameter is required.
         */
        public Builder deliveryChannelDescription(final java.lang.String deliveryChannelDescription) {
            this.props.deliveryChannelDescription(deliveryChannelDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelDescription This parameter is required.
         */
        public Builder deliveryChannelDescription(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelDescription) {
            this.props.deliveryChannelDescription(deliveryChannelDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryChannelId This parameter is required.
         */
        public Builder deliveryChannelId(final java.lang.String deliveryChannelId) {
            this.props.deliveryChannelId(deliveryChannelId);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryChannelId This parameter is required.
         */
        public Builder deliveryChannelId(final com.aliyun.ros.cdk.core.IResolvable deliveryChannelId) {
            this.props.deliveryChannelId(deliveryChannelId);
            return this;
        }

        /**
         * @return {@code this}
         * @param enabledResourceChangeDelivery This parameter is required.
         */
        public Builder enabledResourceChangeDelivery(final java.lang.String enabledResourceChangeDelivery) {
            this.props.enabledResourceChangeDelivery(enabledResourceChangeDelivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param enabledResourceChangeDelivery This parameter is required.
         */
        public Builder enabledResourceChangeDelivery(final com.aliyun.ros.cdk.core.IResolvable enabledResourceChangeDelivery) {
            this.props.enabledResourceChangeDelivery(enabledResourceChangeDelivery);
            return this;
        }

        /**
         * @return {@code this}
         * @param enabledResourceSnapshotDelivery This parameter is required.
         */
        public Builder enabledResourceSnapshotDelivery(final java.lang.String enabledResourceSnapshotDelivery) {
            this.props.enabledResourceSnapshotDelivery(enabledResourceSnapshotDelivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param enabledResourceSnapshotDelivery This parameter is required.
         */
        public Builder enabledResourceSnapshotDelivery(final com.aliyun.ros.cdk.core.IResolvable enabledResourceSnapshotDelivery) {
            this.props.enabledResourceSnapshotDelivery(enabledResourceSnapshotDelivery);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceChangeDelivery This parameter is required.
         */
        public Builder resourceChangeDelivery(final com.aliyun.ros.cdk.core.IResolvable resourceChangeDelivery) {
            this.props.resourceChangeDelivery(resourceChangeDelivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceChangeDelivery This parameter is required.
         */
        public Builder resourceChangeDelivery(final com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty resourceChangeDelivery) {
            this.props.resourceChangeDelivery(resourceChangeDelivery);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceSnapshotDelivery This parameter is required.
         */
        public Builder resourceSnapshotDelivery(final com.aliyun.ros.cdk.core.IResolvable resourceSnapshotDelivery) {
            this.props.resourceSnapshotDelivery(resourceSnapshotDelivery);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceSnapshotDelivery This parameter is required.
         */
        public Builder resourceSnapshotDelivery(final com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty resourceSnapshotDelivery) {
            this.props.resourceSnapshotDelivery(resourceSnapshotDelivery);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel build() {
            return new com.aliyun.ros.cdk.resourcemanager.RosDeliveryChannel(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
