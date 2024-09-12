package com.aliyun.ros.cdk.dataworks;

/**
 * Properties for defining a <code>Project</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:25.101Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.ProjectProps")
@software.amazon.jsii.Jsii.Proxy(ProjectProps.Jsii$Proxy.class)
public interface ProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property projectIdentifier: The name of the workspace.
     * <p>
     * The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectIdentifier();

    /**
     * Property disableDevelopment: Specifies whether to disable the Development role.
     * <p>
     * Valid values:
     * false: enables the Development role.
     * true: disables the Development role.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableDevelopment() {
        return null;
    }

    /**
     * Property isAllowDownload: Specifies whether query result download from DataStudio is allowed.
     * <p>
     * Valid values:
     * true: allowed
     * false: not allowed
     * Default value: true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsAllowDownload() {
        return null;
    }

    /**
     * Property projectDescription: The description of the workspace.
     * <p>
     * If not provided, it is the same as ProjectIdentifier.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProjectDescription() {
        return null;
    }

    /**
     * Property projectMode: The mode of the workspace.
     * <p>
     * For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
     * 2: basic mode
     * 3: standard mode
     * Default value: 2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProjectMode() {
        return null;
    }

    /**
     * Property projectName: The display name of the workspace.
     * <p>
     * If not provided, it is the same as ProjectIdentifier.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProjectName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to workspace.
     * <p>
     * Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ProjectProps> {
        java.lang.Object projectIdentifier;
        java.lang.Object disableDevelopment;
        java.lang.Object isAllowDownload;
        java.lang.Object projectDescription;
        java.lang.Object projectMode;
        java.lang.Object projectName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty> tags;

        /**
         * Sets the value of {@link ProjectProps#getProjectIdentifier}
         * @param projectIdentifier Property projectIdentifier: The name of the workspace. This parameter is required.
         *                          The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
         * @return {@code this}
         */
        public Builder projectIdentifier(java.lang.String projectIdentifier) {
            this.projectIdentifier = projectIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectIdentifier}
         * @param projectIdentifier Property projectIdentifier: The name of the workspace. This parameter is required.
         *                          The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
         * @return {@code this}
         */
        public Builder projectIdentifier(com.aliyun.ros.cdk.core.IResolvable projectIdentifier) {
            this.projectIdentifier = projectIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getDisableDevelopment}
         * @param disableDevelopment Property disableDevelopment: Specifies whether to disable the Development role.
         *                           Valid values:
         *                           false: enables the Development role.
         *                           true: disables the Development role.
         *                           Default value: false.
         * @return {@code this}
         */
        public Builder disableDevelopment(java.lang.Boolean disableDevelopment) {
            this.disableDevelopment = disableDevelopment;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getDisableDevelopment}
         * @param disableDevelopment Property disableDevelopment: Specifies whether to disable the Development role.
         *                           Valid values:
         *                           false: enables the Development role.
         *                           true: disables the Development role.
         *                           Default value: false.
         * @return {@code this}
         */
        public Builder disableDevelopment(com.aliyun.ros.cdk.core.IResolvable disableDevelopment) {
            this.disableDevelopment = disableDevelopment;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getIsAllowDownload}
         * @param isAllowDownload Property isAllowDownload: Specifies whether query result download from DataStudio is allowed.
         *                        Valid values:
         *                        true: allowed
         *                        false: not allowed
         *                        Default value: true.
         * @return {@code this}
         */
        public Builder isAllowDownload(java.lang.Boolean isAllowDownload) {
            this.isAllowDownload = isAllowDownload;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getIsAllowDownload}
         * @param isAllowDownload Property isAllowDownload: Specifies whether query result download from DataStudio is allowed.
         *                        Valid values:
         *                        true: allowed
         *                        false: not allowed
         *                        Default value: true.
         * @return {@code this}
         */
        public Builder isAllowDownload(com.aliyun.ros.cdk.core.IResolvable isAllowDownload) {
            this.isAllowDownload = isAllowDownload;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectDescription}
         * @param projectDescription Property projectDescription: The description of the workspace.
         *                           If not provided, it is the same as ProjectIdentifier.
         * @return {@code this}
         */
        public Builder projectDescription(java.lang.String projectDescription) {
            this.projectDescription = projectDescription;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectDescription}
         * @param projectDescription Property projectDescription: The description of the workspace.
         *                           If not provided, it is the same as ProjectIdentifier.
         * @return {@code this}
         */
        public Builder projectDescription(com.aliyun.ros.cdk.core.IResolvable projectDescription) {
            this.projectDescription = projectDescription;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectMode}
         * @param projectMode Property projectMode: The mode of the workspace.
         *                    For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
         *                    2: basic mode
         *                    3: standard mode
         *                    Default value: 2.
         * @return {@code this}
         */
        public Builder projectMode(java.lang.Number projectMode) {
            this.projectMode = projectMode;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectMode}
         * @param projectMode Property projectMode: The mode of the workspace.
         *                    For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
         *                    2: basic mode
         *                    3: standard mode
         *                    Default value: 2.
         * @return {@code this}
         */
        public Builder projectMode(com.aliyun.ros.cdk.core.IResolvable projectMode) {
            this.projectMode = projectMode;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectName}
         * @param projectName Property projectName: The display name of the workspace.
         *                    If not provided, it is the same as ProjectIdentifier.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getProjectName}
         * @param projectName Property projectName: The display name of the workspace.
         *                    If not provided, it is the same as ProjectIdentifier.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ProjectProps#getTags}
         * @param tags Property tags: Tags to attach to workspace.
         *             Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProjectProps {
        private final java.lang.Object projectIdentifier;
        private final java.lang.Object disableDevelopment;
        private final java.lang.Object isAllowDownload;
        private final java.lang.Object projectDescription;
        private final java.lang.Object projectMode;
        private final java.lang.Object projectName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.projectIdentifier = software.amazon.jsii.Kernel.get(this, "projectIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableDevelopment = software.amazon.jsii.Kernel.get(this, "disableDevelopment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isAllowDownload = software.amazon.jsii.Kernel.get(this, "isAllowDownload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectDescription = software.amazon.jsii.Kernel.get(this, "projectDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectMode = software.amazon.jsii.Kernel.get(this, "projectMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.projectIdentifier = java.util.Objects.requireNonNull(builder.projectIdentifier, "projectIdentifier is required");
            this.disableDevelopment = builder.disableDevelopment;
            this.isAllowDownload = builder.isAllowDownload;
            this.projectDescription = builder.projectDescription;
            this.projectMode = builder.projectMode;
            this.projectName = builder.projectName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getProjectIdentifier() {
            return this.projectIdentifier;
        }

        @Override
        public final java.lang.Object getDisableDevelopment() {
            return this.disableDevelopment;
        }

        @Override
        public final java.lang.Object getIsAllowDownload() {
            return this.isAllowDownload;
        }

        @Override
        public final java.lang.Object getProjectDescription() {
            return this.projectDescription;
        }

        @Override
        public final java.lang.Object getProjectMode() {
            return this.projectMode;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("projectIdentifier", om.valueToTree(this.getProjectIdentifier()));
            if (this.getDisableDevelopment() != null) {
                data.set("disableDevelopment", om.valueToTree(this.getDisableDevelopment()));
            }
            if (this.getIsAllowDownload() != null) {
                data.set("isAllowDownload", om.valueToTree(this.getIsAllowDownload()));
            }
            if (this.getProjectDescription() != null) {
                data.set("projectDescription", om.valueToTree(this.getProjectDescription()));
            }
            if (this.getProjectMode() != null) {
                data.set("projectMode", om.valueToTree(this.getProjectMode()));
            }
            if (this.getProjectName() != null) {
                data.set("projectName", om.valueToTree(this.getProjectName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dataworks.ProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ProjectProps.Jsii$Proxy that = (ProjectProps.Jsii$Proxy) o;

            if (!projectIdentifier.equals(that.projectIdentifier)) return false;
            if (this.disableDevelopment != null ? !this.disableDevelopment.equals(that.disableDevelopment) : that.disableDevelopment != null) return false;
            if (this.isAllowDownload != null ? !this.isAllowDownload.equals(that.isAllowDownload) : that.isAllowDownload != null) return false;
            if (this.projectDescription != null ? !this.projectDescription.equals(that.projectDescription) : that.projectDescription != null) return false;
            if (this.projectMode != null ? !this.projectMode.equals(that.projectMode) : that.projectMode != null) return false;
            if (this.projectName != null ? !this.projectName.equals(that.projectName) : that.projectName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.projectIdentifier.hashCode();
            result = 31 * result + (this.disableDevelopment != null ? this.disableDevelopment.hashCode() : 0);
            result = 31 * result + (this.isAllowDownload != null ? this.isAllowDownload.hashCode() : 0);
            result = 31 * result + (this.projectDescription != null ? this.projectDescription.hashCode() : 0);
            result = 31 * result + (this.projectMode != null ? this.projectMode.hashCode() : 0);
            result = 31 * result + (this.projectName != null ? this.projectName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
