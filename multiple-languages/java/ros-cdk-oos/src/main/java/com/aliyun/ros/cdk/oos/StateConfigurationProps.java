package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>StateConfiguration</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.967Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.StateConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(StateConfigurationProps.Jsii$Proxy.class)
public interface StateConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property scheduleExpression: The schedule expression.
     * <p>
     * The interval between two schedules must be a minimum of 30 minutes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScheduleExpression();

    /**
     * Property scheduleType: The schedule type.
     * <p>
     * Set the value to rate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScheduleType();

    /**
     * Property targets: The resources to be queried.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargets();

    /**
     * Property templateName: The name of the template.
     * <p>
     * The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplateName();

    /**
     * Property configureMode: The configuration mode.
     * <p>
     * Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigureMode() {
        return null;
    }

    /**
     * Property description: The description of the desired-state configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property parameters: The parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     * Property resourceGroupId: The resource group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     * Property templateVersion: The version number of the template.
     * <p>
     * If you do not specify this parameter, the latest version of the template is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StateConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StateConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StateConfigurationProps> {
        java.lang.Object scheduleExpression;
        java.lang.Object scheduleType;
        java.lang.Object targets;
        java.lang.Object templateName;
        java.lang.Object configureMode;
        java.lang.Object description;
        java.lang.Object parameters;
        java.lang.Object resourceGroupId;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object templateVersion;

        /**
         * Sets the value of {@link StateConfigurationProps#getScheduleExpression}
         * @param scheduleExpression Property scheduleExpression: The schedule expression. This parameter is required.
         *                           The interval between two schedules must be a minimum of 30 minutes.
         * @return {@code this}
         */
        public Builder scheduleExpression(java.lang.String scheduleExpression) {
            this.scheduleExpression = scheduleExpression;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getScheduleExpression}
         * @param scheduleExpression Property scheduleExpression: The schedule expression. This parameter is required.
         *                           The interval between two schedules must be a minimum of 30 minutes.
         * @return {@code this}
         */
        public Builder scheduleExpression(com.aliyun.ros.cdk.core.IResolvable scheduleExpression) {
            this.scheduleExpression = scheduleExpression;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getScheduleType}
         * @param scheduleType Property scheduleType: The schedule type. This parameter is required.
         *                     Set the value to rate.
         * @return {@code this}
         */
        public Builder scheduleType(java.lang.String scheduleType) {
            this.scheduleType = scheduleType;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getScheduleType}
         * @param scheduleType Property scheduleType: The schedule type. This parameter is required.
         *                     Set the value to rate.
         * @return {@code this}
         */
        public Builder scheduleType(com.aliyun.ros.cdk.core.IResolvable scheduleType) {
            this.scheduleType = scheduleType;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getTargets}
         * @param targets Property targets: The resources to be queried. This parameter is required.
         * @return {@code this}
         */
        public Builder targets(java.lang.String targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getTargets}
         * @param targets Property targets: The resources to be queried. This parameter is required.
         * @return {@code this}
         */
        public Builder targets(com.aliyun.ros.cdk.core.IResolvable targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getTemplateName}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         *                     The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getTemplateName}
         * @param templateName Property templateName: The name of the template. This parameter is required.
         *                     The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getConfigureMode}
         * @param configureMode Property configureMode: The configuration mode.
         *                      Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
         * @return {@code this}
         */
        public Builder configureMode(java.lang.String configureMode) {
            this.configureMode = configureMode;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getConfigureMode}
         * @param configureMode Property configureMode: The configuration mode.
         *                      Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
         * @return {@code this}
         */
        public Builder configureMode(com.aliyun.ros.cdk.core.IResolvable configureMode) {
            this.configureMode = configureMode;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getDescription}
         * @param description Property description: The description of the desired-state configuration.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getDescription}
         * @param description Property description: The description of the desired-state configuration.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getParameters}
         * @param parameters Property parameters: The parameters.
         * @return {@code this}
         */
        public Builder parameters(java.lang.String parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getParameters}
         * @param parameters Property parameters: The parameters.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getTags}
         * @param tags Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getTemplateVersion}
         * @param templateVersion Property templateVersion: The version number of the template.
         *                        If you do not specify this parameter, the latest version of the template is used.
         * @return {@code this}
         */
        public Builder templateVersion(java.lang.String templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Sets the value of {@link StateConfigurationProps#getTemplateVersion}
         * @param templateVersion Property templateVersion: The version number of the template.
         *                        If you do not specify this parameter, the latest version of the template is used.
         * @return {@code this}
         */
        public Builder templateVersion(com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StateConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StateConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StateConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StateConfigurationProps {
        private final java.lang.Object scheduleExpression;
        private final java.lang.Object scheduleType;
        private final java.lang.Object targets;
        private final java.lang.Object templateName;
        private final java.lang.Object configureMode;
        private final java.lang.Object description;
        private final java.lang.Object parameters;
        private final java.lang.Object resourceGroupId;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object templateVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scheduleExpression = software.amazon.jsii.Kernel.get(this, "scheduleExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduleType = software.amazon.jsii.Kernel.get(this, "scheduleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targets = software.amazon.jsii.Kernel.get(this, "targets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configureMode = software.amazon.jsii.Kernel.get(this, "configureMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.templateVersion = software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scheduleExpression = java.util.Objects.requireNonNull(builder.scheduleExpression, "scheduleExpression is required");
            this.scheduleType = java.util.Objects.requireNonNull(builder.scheduleType, "scheduleType is required");
            this.targets = java.util.Objects.requireNonNull(builder.targets, "targets is required");
            this.templateName = java.util.Objects.requireNonNull(builder.templateName, "templateName is required");
            this.configureMode = builder.configureMode;
            this.description = builder.description;
            this.parameters = builder.parameters;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.templateVersion = builder.templateVersion;
        }

        @Override
        public final java.lang.Object getScheduleExpression() {
            return this.scheduleExpression;
        }

        @Override
        public final java.lang.Object getScheduleType() {
            return this.scheduleType;
        }

        @Override
        public final java.lang.Object getTargets() {
            return this.targets;
        }

        @Override
        public final java.lang.Object getTemplateName() {
            return this.templateName;
        }

        @Override
        public final java.lang.Object getConfigureMode() {
            return this.configureMode;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTemplateVersion() {
            return this.templateVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("scheduleExpression", om.valueToTree(this.getScheduleExpression()));
            data.set("scheduleType", om.valueToTree(this.getScheduleType()));
            data.set("targets", om.valueToTree(this.getTargets()));
            data.set("templateName", om.valueToTree(this.getTemplateName()));
            if (this.getConfigureMode() != null) {
                data.set("configureMode", om.valueToTree(this.getConfigureMode()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTemplateVersion() != null) {
                data.set("templateVersion", om.valueToTree(this.getTemplateVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.StateConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StateConfigurationProps.Jsii$Proxy that = (StateConfigurationProps.Jsii$Proxy) o;

            if (!scheduleExpression.equals(that.scheduleExpression)) return false;
            if (!scheduleType.equals(that.scheduleType)) return false;
            if (!targets.equals(that.targets)) return false;
            if (!templateName.equals(that.templateName)) return false;
            if (this.configureMode != null ? !this.configureMode.equals(that.configureMode) : that.configureMode != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.templateVersion != null ? this.templateVersion.equals(that.templateVersion) : that.templateVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scheduleExpression.hashCode();
            result = 31 * result + (this.scheduleType.hashCode());
            result = 31 * result + (this.targets.hashCode());
            result = 31 * result + (this.templateName.hashCode());
            result = 31 * result + (this.configureMode != null ? this.configureMode.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.templateVersion != null ? this.templateVersion.hashCode() : 0);
            return result;
        }
    }
}
