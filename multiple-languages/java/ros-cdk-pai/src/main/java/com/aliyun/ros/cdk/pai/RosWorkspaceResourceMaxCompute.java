package com.aliyun.ros.cdk.pai;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::PAI::WorkspaceResourceMaxCompute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:16.563Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute")
public class RosWorkspaceResourceMaxCompute extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWorkspaceResourceMaxCompute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWorkspaceResourceMaxCompute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxCompute.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWorkspaceResourceMaxCompute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxComputeProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsDefault() {
        return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResources() {
        return software.amazon.jsii.Kernel.get(this, "attrResources", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupName() {
        return software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getResources() {
        return software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResources(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resources", java.util.Objects.requireNonNull(value, "resources is required"));
    }

    /**
     */
    public void setResources(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxCompute.ResourcesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxCompute.ResourcesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "resources", java.util.Objects.requireNonNull(value, "resources is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", java.util.Objects.requireNonNull(value, "workspaceId is required"));
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", java.util.Objects.requireNonNull(value, "workspaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsDefault() {
        return software.amazon.jsii.Kernel.get(this, "isDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsDefault(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isDefault", value);
    }

    /**
     */
    public void setIsDefault(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isDefault", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOption() {
        return software.amazon.jsii.Kernel.get(this, "option", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOption(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "option", value);
    }

    /**
     */
    public void setOption(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "option", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute.QuotasProperty")
    @software.amazon.jsii.Jsii.Proxy(QuotasProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QuotasProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getQuotaId();

        /**
         * @return a {@link Builder} of {@link QuotasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QuotasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QuotasProperty> {
            java.lang.Object quotaId;

            /**
             * Sets the value of {@link QuotasProperty#getQuotaId}
             * @param quotaId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder quotaId(java.lang.String quotaId) {
                this.quotaId = quotaId;
                return this;
            }

            /**
             * Sets the value of {@link QuotasProperty#getQuotaId}
             * @param quotaId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder quotaId(com.aliyun.ros.cdk.core.IResolvable quotaId) {
                this.quotaId = quotaId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QuotasProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QuotasProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QuotasProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QuotasProperty {
            private final java.lang.Object quotaId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.quotaId = software.amazon.jsii.Kernel.get(this, "quotaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.quotaId = java.util.Objects.requireNonNull(builder.quotaId, "quotaId is required");
            }

            @Override
            public final java.lang.Object getQuotaId() {
                return this.quotaId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("quotaId", om.valueToTree(this.getQuotaId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute.QuotasProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QuotasProperty.Jsii$Proxy that = (QuotasProperty.Jsii$Proxy) o;

                return this.quotaId.equals(that.quotaId);
            }

            @Override
            public final int hashCode() {
                int result = this.quotaId.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute.ResourcesProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourcesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourcesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnvType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceResourceName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceResourceWorkspaceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQuotas() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourcesProperty> {
            java.lang.Object envType;
            java.lang.Object workspaceResourceName;
            java.lang.Object workspaceResourceWorkspaceId;
            java.lang.Object quotas;
            java.lang.Object spec;

            /**
             * Sets the value of {@link ResourcesProperty#getEnvType}
             * @param envType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder envType(java.lang.String envType) {
                this.envType = envType;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getEnvType}
             * @param envType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder envType(com.aliyun.ros.cdk.core.IResolvable envType) {
                this.envType = envType;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getWorkspaceResourceName}
             * @param workspaceResourceName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workspaceResourceName(java.lang.String workspaceResourceName) {
                this.workspaceResourceName = workspaceResourceName;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getWorkspaceResourceName}
             * @param workspaceResourceName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workspaceResourceName(com.aliyun.ros.cdk.core.IResolvable workspaceResourceName) {
                this.workspaceResourceName = workspaceResourceName;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getWorkspaceResourceWorkspaceId}
             * @param workspaceResourceWorkspaceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workspaceResourceWorkspaceId(java.lang.String workspaceResourceWorkspaceId) {
                this.workspaceResourceWorkspaceId = workspaceResourceWorkspaceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getWorkspaceResourceWorkspaceId}
             * @param workspaceResourceWorkspaceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workspaceResourceWorkspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceResourceWorkspaceId) {
                this.workspaceResourceWorkspaceId = workspaceResourceWorkspaceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getQuotas}
             * @param quotas the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder quotas(com.aliyun.ros.cdk.core.IResolvable quotas) {
                this.quotas = quotas;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getQuotas}
             * @param quotas the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder quotas(java.util.List<? extends java.lang.Object> quotas) {
                this.quotas = quotas;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getSpec}
             * @param spec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getSpec}
             * @param spec the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(java.util.Map<java.lang.String, ? extends java.lang.Object> spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourcesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourcesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourcesProperty {
            private final java.lang.Object envType;
            private final java.lang.Object workspaceResourceName;
            private final java.lang.Object workspaceResourceWorkspaceId;
            private final java.lang.Object quotas;
            private final java.lang.Object spec;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.envType = software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.workspaceResourceName = software.amazon.jsii.Kernel.get(this, "workspaceResourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.workspaceResourceWorkspaceId = software.amazon.jsii.Kernel.get(this, "workspaceResourceWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.quotas = software.amazon.jsii.Kernel.get(this, "quotas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.envType = java.util.Objects.requireNonNull(builder.envType, "envType is required");
                this.workspaceResourceName = java.util.Objects.requireNonNull(builder.workspaceResourceName, "workspaceResourceName is required");
                this.workspaceResourceWorkspaceId = java.util.Objects.requireNonNull(builder.workspaceResourceWorkspaceId, "workspaceResourceWorkspaceId is required");
                this.quotas = builder.quotas;
                this.spec = builder.spec;
            }

            @Override
            public final java.lang.Object getEnvType() {
                return this.envType;
            }

            @Override
            public final java.lang.Object getWorkspaceResourceName() {
                return this.workspaceResourceName;
            }

            @Override
            public final java.lang.Object getWorkspaceResourceWorkspaceId() {
                return this.workspaceResourceWorkspaceId;
            }

            @Override
            public final java.lang.Object getQuotas() {
                return this.quotas;
            }

            @Override
            public final java.lang.Object getSpec() {
                return this.spec;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("envType", om.valueToTree(this.getEnvType()));
                data.set("workspaceResourceName", om.valueToTree(this.getWorkspaceResourceName()));
                data.set("workspaceResourceWorkspaceId", om.valueToTree(this.getWorkspaceResourceWorkspaceId()));
                if (this.getQuotas() != null) {
                    data.set("quotas", om.valueToTree(this.getQuotas()));
                }
                if (this.getSpec() != null) {
                    data.set("spec", om.valueToTree(this.getSpec()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.RosWorkspaceResourceMaxCompute.ResourcesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourcesProperty.Jsii$Proxy that = (ResourcesProperty.Jsii$Proxy) o;

                if (!envType.equals(that.envType)) return false;
                if (!workspaceResourceName.equals(that.workspaceResourceName)) return false;
                if (!workspaceResourceWorkspaceId.equals(that.workspaceResourceWorkspaceId)) return false;
                if (this.quotas != null ? !this.quotas.equals(that.quotas) : that.quotas != null) return false;
                return this.spec != null ? this.spec.equals(that.spec) : that.spec == null;
            }

            @Override
            public final int hashCode() {
                int result = this.envType.hashCode();
                result = 31 * result + (this.workspaceResourceName.hashCode());
                result = 31 * result + (this.workspaceResourceWorkspaceId.hashCode());
                result = 31 * result + (this.quotas != null ? this.quotas.hashCode() : 0);
                result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxCompute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxCompute> {
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
        private final com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxComputeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxComputeProps.Builder();
        }

        /**
         * @return {@code this}
         * @param groupName This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupName This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param resources This parameter is required.
         */
        public Builder resources(final com.aliyun.ros.cdk.core.IResolvable resources) {
            this.props.resources(resources);
            return this;
        }
        /**
         * @return {@code this}
         * @param resources This parameter is required.
         */
        public Builder resources(final java.util.List<? extends java.lang.Object> resources) {
            this.props.resources(resources);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param isDefault This parameter is required.
         */
        public Builder isDefault(final java.lang.Boolean isDefault) {
            this.props.isDefault(isDefault);
            return this;
        }
        /**
         * @return {@code this}
         * @param isDefault This parameter is required.
         */
        public Builder isDefault(final com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.props.isDefault(isDefault);
            return this;
        }

        /**
         * @return {@code this}
         * @param option This parameter is required.
         */
        public Builder option(final java.lang.String option) {
            this.props.option(option);
            return this;
        }
        /**
         * @return {@code this}
         * @param option This parameter is required.
         */
        public Builder option(final com.aliyun.ros.cdk.core.IResolvable option) {
            this.props.option(option);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxCompute}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxCompute build() {
            return new com.aliyun.ros.cdk.pai.RosWorkspaceResourceMaxCompute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
