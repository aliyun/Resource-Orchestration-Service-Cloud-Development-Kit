package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a <code>ALIYUN::ROS::StackGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:03.517Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosStackGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosStackGroupProps.Jsii$Proxy.class)
public interface RosStackGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStackGroupName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdministrationRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoDeployment() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDynamicTemplateBody() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExecutionRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPermissionModel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateBody() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosStackGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosStackGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosStackGroupProps> {
        java.lang.Object stackGroupName;
        java.lang.Object administrationRoleName;
        java.lang.Object autoDeployment;
        java.lang.Object description;
        java.lang.Object dynamicTemplateBody;
        java.lang.Object executionRoleName;
        java.lang.Object parameters;
        java.lang.Object permissionModel;
        java.lang.Object resourceGroupId;
        java.lang.Object templateBody;
        java.lang.Object templateId;
        java.lang.Object templateUrl;
        java.lang.Object templateVersion;

        /**
         * Sets the value of {@link RosStackGroupProps#getStackGroupName}
         * @param stackGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stackGroupName(java.lang.String stackGroupName) {
            this.stackGroupName = stackGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getStackGroupName}
         * @param stackGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stackGroupName(com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.stackGroupName = stackGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getAdministrationRoleName}
         * @param administrationRoleName the value to be set.
         * @return {@code this}
         */
        public Builder administrationRoleName(java.lang.String administrationRoleName) {
            this.administrationRoleName = administrationRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getAdministrationRoleName}
         * @param administrationRoleName the value to be set.
         * @return {@code this}
         */
        public Builder administrationRoleName(com.aliyun.ros.cdk.core.IResolvable administrationRoleName) {
            this.administrationRoleName = administrationRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getAutoDeployment}
         * @param autoDeployment the value to be set.
         * @return {@code this}
         */
        public Builder autoDeployment(com.aliyun.ros.cdk.core.IResolvable autoDeployment) {
            this.autoDeployment = autoDeployment;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getAutoDeployment}
         * @param autoDeployment the value to be set.
         * @return {@code this}
         */
        public Builder autoDeployment(com.aliyun.ros.cdk.ros.RosStackGroup.AutoDeploymentProperty autoDeployment) {
            this.autoDeployment = autoDeployment;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getDynamicTemplateBody}
         * @param dynamicTemplateBody the value to be set.
         * @return {@code this}
         */
        public Builder dynamicTemplateBody(com.aliyun.ros.cdk.core.IResolvable dynamicTemplateBody) {
            this.dynamicTemplateBody = dynamicTemplateBody;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getDynamicTemplateBody}
         * @param dynamicTemplateBody the value to be set.
         * @return {@code this}
         */
        public Builder dynamicTemplateBody(java.util.Map<java.lang.String, ? extends java.lang.Object> dynamicTemplateBody) {
            this.dynamicTemplateBody = dynamicTemplateBody;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getExecutionRoleName}
         * @param executionRoleName the value to be set.
         * @return {@code this}
         */
        public Builder executionRoleName(java.lang.String executionRoleName) {
            this.executionRoleName = executionRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getExecutionRoleName}
         * @param executionRoleName the value to be set.
         * @return {@code this}
         */
        public Builder executionRoleName(com.aliyun.ros.cdk.core.IResolvable executionRoleName) {
            this.executionRoleName = executionRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getPermissionModel}
         * @param permissionModel the value to be set.
         * @return {@code this}
         */
        public Builder permissionModel(java.lang.String permissionModel) {
            this.permissionModel = permissionModel;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getPermissionModel}
         * @param permissionModel the value to be set.
         * @return {@code this}
         */
        public Builder permissionModel(com.aliyun.ros.cdk.core.IResolvable permissionModel) {
            this.permissionModel = permissionModel;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getTemplateBody}
         * @param templateBody the value to be set.
         * @return {@code this}
         */
        public Builder templateBody(com.aliyun.ros.cdk.core.IResolvable templateBody) {
            this.templateBody = templateBody;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getTemplateBody}
         * @param templateBody the value to be set.
         * @return {@code this}
         */
        public Builder templateBody(java.util.Map<java.lang.String, ? extends java.lang.Object> templateBody) {
            this.templateBody = templateBody;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getTemplateId}
         * @param templateId the value to be set.
         * @return {@code this}
         */
        public Builder templateId(java.lang.String templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getTemplateId}
         * @param templateId the value to be set.
         * @return {@code this}
         */
        public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getTemplateUrl}
         * @param templateUrl the value to be set.
         * @return {@code this}
         */
        public Builder templateUrl(java.lang.String templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getTemplateUrl}
         * @param templateUrl the value to be set.
         * @return {@code this}
         */
        public Builder templateUrl(com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getTemplateVersion}
         * @param templateVersion the value to be set.
         * @return {@code this}
         */
        public Builder templateVersion(java.lang.String templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosStackGroupProps#getTemplateVersion}
         * @param templateVersion the value to be set.
         * @return {@code this}
         */
        public Builder templateVersion(com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.templateVersion = templateVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosStackGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosStackGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosStackGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosStackGroupProps {
        private final java.lang.Object stackGroupName;
        private final java.lang.Object administrationRoleName;
        private final java.lang.Object autoDeployment;
        private final java.lang.Object description;
        private final java.lang.Object dynamicTemplateBody;
        private final java.lang.Object executionRoleName;
        private final java.lang.Object parameters;
        private final java.lang.Object permissionModel;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object templateBody;
        private final java.lang.Object templateId;
        private final java.lang.Object templateUrl;
        private final java.lang.Object templateVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.stackGroupName = software.amazon.jsii.Kernel.get(this, "stackGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.administrationRoleName = software.amazon.jsii.Kernel.get(this, "administrationRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoDeployment = software.amazon.jsii.Kernel.get(this, "autoDeployment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dynamicTemplateBody = software.amazon.jsii.Kernel.get(this, "dynamicTemplateBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.executionRoleName = software.amazon.jsii.Kernel.get(this, "executionRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permissionModel = software.amazon.jsii.Kernel.get(this, "permissionModel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateBody = software.amazon.jsii.Kernel.get(this, "templateBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateUrl = software.amazon.jsii.Kernel.get(this, "templateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateVersion = software.amazon.jsii.Kernel.get(this, "templateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.stackGroupName = java.util.Objects.requireNonNull(builder.stackGroupName, "stackGroupName is required");
            this.administrationRoleName = builder.administrationRoleName;
            this.autoDeployment = builder.autoDeployment;
            this.description = builder.description;
            this.dynamicTemplateBody = builder.dynamicTemplateBody;
            this.executionRoleName = builder.executionRoleName;
            this.parameters = builder.parameters;
            this.permissionModel = builder.permissionModel;
            this.resourceGroupId = builder.resourceGroupId;
            this.templateBody = builder.templateBody;
            this.templateId = builder.templateId;
            this.templateUrl = builder.templateUrl;
            this.templateVersion = builder.templateVersion;
        }

        @Override
        public final java.lang.Object getStackGroupName() {
            return this.stackGroupName;
        }

        @Override
        public final java.lang.Object getAdministrationRoleName() {
            return this.administrationRoleName;
        }

        @Override
        public final java.lang.Object getAutoDeployment() {
            return this.autoDeployment;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDynamicTemplateBody() {
            return this.dynamicTemplateBody;
        }

        @Override
        public final java.lang.Object getExecutionRoleName() {
            return this.executionRoleName;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getPermissionModel() {
            return this.permissionModel;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getTemplateBody() {
            return this.templateBody;
        }

        @Override
        public final java.lang.Object getTemplateId() {
            return this.templateId;
        }

        @Override
        public final java.lang.Object getTemplateUrl() {
            return this.templateUrl;
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

            data.set("stackGroupName", om.valueToTree(this.getStackGroupName()));
            if (this.getAdministrationRoleName() != null) {
                data.set("administrationRoleName", om.valueToTree(this.getAdministrationRoleName()));
            }
            if (this.getAutoDeployment() != null) {
                data.set("autoDeployment", om.valueToTree(this.getAutoDeployment()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDynamicTemplateBody() != null) {
                data.set("dynamicTemplateBody", om.valueToTree(this.getDynamicTemplateBody()));
            }
            if (this.getExecutionRoleName() != null) {
                data.set("executionRoleName", om.valueToTree(this.getExecutionRoleName()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getPermissionModel() != null) {
                data.set("permissionModel", om.valueToTree(this.getPermissionModel()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTemplateBody() != null) {
                data.set("templateBody", om.valueToTree(this.getTemplateBody()));
            }
            if (this.getTemplateId() != null) {
                data.set("templateId", om.valueToTree(this.getTemplateId()));
            }
            if (this.getTemplateUrl() != null) {
                data.set("templateUrl", om.valueToTree(this.getTemplateUrl()));
            }
            if (this.getTemplateVersion() != null) {
                data.set("templateVersion", om.valueToTree(this.getTemplateVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosStackGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosStackGroupProps.Jsii$Proxy that = (RosStackGroupProps.Jsii$Proxy) o;

            if (!stackGroupName.equals(that.stackGroupName)) return false;
            if (this.administrationRoleName != null ? !this.administrationRoleName.equals(that.administrationRoleName) : that.administrationRoleName != null) return false;
            if (this.autoDeployment != null ? !this.autoDeployment.equals(that.autoDeployment) : that.autoDeployment != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.dynamicTemplateBody != null ? !this.dynamicTemplateBody.equals(that.dynamicTemplateBody) : that.dynamicTemplateBody != null) return false;
            if (this.executionRoleName != null ? !this.executionRoleName.equals(that.executionRoleName) : that.executionRoleName != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.permissionModel != null ? !this.permissionModel.equals(that.permissionModel) : that.permissionModel != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.templateBody != null ? !this.templateBody.equals(that.templateBody) : that.templateBody != null) return false;
            if (this.templateId != null ? !this.templateId.equals(that.templateId) : that.templateId != null) return false;
            if (this.templateUrl != null ? !this.templateUrl.equals(that.templateUrl) : that.templateUrl != null) return false;
            return this.templateVersion != null ? this.templateVersion.equals(that.templateVersion) : that.templateVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.stackGroupName.hashCode();
            result = 31 * result + (this.administrationRoleName != null ? this.administrationRoleName.hashCode() : 0);
            result = 31 * result + (this.autoDeployment != null ? this.autoDeployment.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dynamicTemplateBody != null ? this.dynamicTemplateBody.hashCode() : 0);
            result = 31 * result + (this.executionRoleName != null ? this.executionRoleName.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.permissionModel != null ? this.permissionModel.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.templateBody != null ? this.templateBody.hashCode() : 0);
            result = 31 * result + (this.templateId != null ? this.templateId.hashCode() : 0);
            result = 31 * result + (this.templateUrl != null ? this.templateUrl.hashCode() : 0);
            result = 31 * result + (this.templateVersion != null ? this.templateVersion.hashCode() : 0);
            return result;
        }
    }
}
