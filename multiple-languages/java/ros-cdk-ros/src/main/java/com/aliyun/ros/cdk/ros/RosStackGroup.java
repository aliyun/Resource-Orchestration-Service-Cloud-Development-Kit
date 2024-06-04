package com.aliyun.ros.cdk.ros;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ROS::StackGroup</code>, which is used to create a stack group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:57.294Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosStackGroup")
public class RosStackGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosStackGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosStackGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ros.RosStackGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosStackGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.RosStackGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStackGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrStackGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getStackGroupName() {
        return software.amazon.jsii.Kernel.get(this, "stackGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStackGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "stackGroupName", java.util.Objects.requireNonNull(value, "stackGroupName is required"));
    }

    /**
     */
    public void setStackGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "stackGroupName", java.util.Objects.requireNonNull(value, "stackGroupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAdministrationRoleName() {
        return software.amazon.jsii.Kernel.get(this, "administrationRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdministrationRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "administrationRoleName", value);
    }

    /**
     */
    public void setAdministrationRoleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "administrationRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoDeployment() {
        return software.amazon.jsii.Kernel.get(this, "autoDeployment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoDeployment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoDeployment", value);
    }

    /**
     */
    public void setAutoDeployment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ros.RosStackGroup.AutoDeploymentProperty value) {
        software.amazon.jsii.Kernel.set(this, "autoDeployment", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDynamicTemplateBody() {
        return software.amazon.jsii.Kernel.get(this, "dynamicTemplateBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDynamicTemplateBody(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dynamicTemplateBody", value);
    }

    /**
     */
    public void setDynamicTemplateBody(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "dynamicTemplateBody", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExecutionRoleName() {
        return software.amazon.jsii.Kernel.get(this, "executionRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExecutionRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "executionRoleName", value);
    }

    /**
     */
    public void setExecutionRoleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "executionRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPermissionModel() {
        return software.amazon.jsii.Kernel.get(this, "permissionModel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPermissionModel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "permissionModel", value);
    }

    /**
     */
    public void setPermissionModel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "permissionModel", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateBody() {
        return software.amazon.jsii.Kernel.get(this, "templateBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateBody(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateBody", value);
    }

    /**
     */
    public void setTemplateBody(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "templateBody", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     */
    public void setTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateUrl() {
        return software.amazon.jsii.Kernel.get(this, "templateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateUrl", value);
    }

    /**
     */
    public void setTemplateUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateVersion() {
        return software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateVersion", value);
    }

    /**
     */
    public void setTemplateVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateVersion", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosStackGroup.AutoDeploymentProperty")
    @software.amazon.jsii.Jsii.Proxy(AutoDeploymentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AutoDeploymentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnabled();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRetainStacksOnAccountRemoval() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AutoDeploymentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AutoDeploymentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AutoDeploymentProperty> {
            java.lang.Object enabled;
            java.lang.Object retainStacksOnAccountRemoval;

            /**
             * Sets the value of {@link AutoDeploymentProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(java.lang.Boolean enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link AutoDeploymentProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link AutoDeploymentProperty#getRetainStacksOnAccountRemoval}
             * @param retainStacksOnAccountRemoval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retainStacksOnAccountRemoval(java.lang.Boolean retainStacksOnAccountRemoval) {
                this.retainStacksOnAccountRemoval = retainStacksOnAccountRemoval;
                return this;
            }

            /**
             * Sets the value of {@link AutoDeploymentProperty#getRetainStacksOnAccountRemoval}
             * @param retainStacksOnAccountRemoval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retainStacksOnAccountRemoval(com.aliyun.ros.cdk.core.IResolvable retainStacksOnAccountRemoval) {
                this.retainStacksOnAccountRemoval = retainStacksOnAccountRemoval;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AutoDeploymentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AutoDeploymentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AutoDeploymentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoDeploymentProperty {
            private final java.lang.Object enabled;
            private final java.lang.Object retainStacksOnAccountRemoval;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.retainStacksOnAccountRemoval = software.amazon.jsii.Kernel.get(this, "retainStacksOnAccountRemoval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enabled = java.util.Objects.requireNonNull(builder.enabled, "enabled is required");
                this.retainStacksOnAccountRemoval = builder.retainStacksOnAccountRemoval;
            }

            @Override
            public final java.lang.Object getEnabled() {
                return this.enabled;
            }

            @Override
            public final java.lang.Object getRetainStacksOnAccountRemoval() {
                return this.retainStacksOnAccountRemoval;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enabled", om.valueToTree(this.getEnabled()));
                if (this.getRetainStacksOnAccountRemoval() != null) {
                    data.set("retainStacksOnAccountRemoval", om.valueToTree(this.getRetainStacksOnAccountRemoval()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosStackGroup.AutoDeploymentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AutoDeploymentProperty.Jsii$Proxy that = (AutoDeploymentProperty.Jsii$Proxy) o;

                if (!enabled.equals(that.enabled)) return false;
                return this.retainStacksOnAccountRemoval != null ? this.retainStacksOnAccountRemoval.equals(that.retainStacksOnAccountRemoval) : that.retainStacksOnAccountRemoval == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enabled.hashCode();
                result = 31 * result + (this.retainStacksOnAccountRemoval != null ? this.retainStacksOnAccountRemoval.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.RosStackGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.RosStackGroup> {
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
        private final com.aliyun.ros.cdk.ros.RosStackGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.RosStackGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param stackGroupName This parameter is required.
         */
        public Builder stackGroupName(final java.lang.String stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param stackGroupName This parameter is required.
         */
        public Builder stackGroupName(final com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param administrationRoleName This parameter is required.
         */
        public Builder administrationRoleName(final java.lang.String administrationRoleName) {
            this.props.administrationRoleName(administrationRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param administrationRoleName This parameter is required.
         */
        public Builder administrationRoleName(final com.aliyun.ros.cdk.core.IResolvable administrationRoleName) {
            this.props.administrationRoleName(administrationRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoDeployment This parameter is required.
         */
        public Builder autoDeployment(final com.aliyun.ros.cdk.core.IResolvable autoDeployment) {
            this.props.autoDeployment(autoDeployment);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoDeployment This parameter is required.
         */
        public Builder autoDeployment(final com.aliyun.ros.cdk.ros.RosStackGroup.AutoDeploymentProperty autoDeployment) {
            this.props.autoDeployment(autoDeployment);
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
         * @return {@code this}
         * @param dynamicTemplateBody This parameter is required.
         */
        public Builder dynamicTemplateBody(final com.aliyun.ros.cdk.core.IResolvable dynamicTemplateBody) {
            this.props.dynamicTemplateBody(dynamicTemplateBody);
            return this;
        }
        /**
         * @return {@code this}
         * @param dynamicTemplateBody This parameter is required.
         */
        public Builder dynamicTemplateBody(final java.util.Map<java.lang.String, ? extends java.lang.Object> dynamicTemplateBody) {
            this.props.dynamicTemplateBody(dynamicTemplateBody);
            return this;
        }

        /**
         * @return {@code this}
         * @param executionRoleName This parameter is required.
         */
        public Builder executionRoleName(final java.lang.String executionRoleName) {
            this.props.executionRoleName(executionRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param executionRoleName This parameter is required.
         */
        public Builder executionRoleName(final com.aliyun.ros.cdk.core.IResolvable executionRoleName) {
            this.props.executionRoleName(executionRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param permissionModel This parameter is required.
         */
        public Builder permissionModel(final java.lang.String permissionModel) {
            this.props.permissionModel(permissionModel);
            return this;
        }
        /**
         * @return {@code this}
         * @param permissionModel This parameter is required.
         */
        public Builder permissionModel(final com.aliyun.ros.cdk.core.IResolvable permissionModel) {
            this.props.permissionModel(permissionModel);
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
         * @return {@code this}
         * @param templateBody This parameter is required.
         */
        public Builder templateBody(final com.aliyun.ros.cdk.core.IResolvable templateBody) {
            this.props.templateBody(templateBody);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateBody This parameter is required.
         */
        public Builder templateBody(final java.util.Map<java.lang.String, ? extends java.lang.Object> templateBody) {
            this.props.templateBody(templateBody);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateId This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateUrl This parameter is required.
         */
        public Builder templateUrl(final java.lang.String templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateUrl This parameter is required.
         */
        public Builder templateUrl(final com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.props.templateUrl(templateUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateVersion This parameter is required.
         */
        public Builder templateVersion(final java.lang.String templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateVersion This parameter is required.
         */
        public Builder templateVersion(final com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.props.templateVersion(templateVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.RosStackGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.RosStackGroup build() {
            return new com.aliyun.ros.cdk.ros.RosStackGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
