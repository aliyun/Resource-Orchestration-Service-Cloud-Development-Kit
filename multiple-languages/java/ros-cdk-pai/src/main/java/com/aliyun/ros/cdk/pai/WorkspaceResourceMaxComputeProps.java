package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>WorkspaceResourceMaxCompute</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.045Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.WorkspaceResourceMaxComputeProps")
@software.amazon.jsii.Jsii.Proxy(WorkspaceResourceMaxComputeProps.Jsii$Proxy.class)
public interface WorkspaceResourceMaxComputeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property groupName: Resource group name.
     * <p>
     * If you want to obtain a resource group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     * Property resources: Resource List.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResources();

    /**
     * Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     * Property isDefault: Indicates whether it is the default resource.
     * <p>
     * Currently, this parameter only supports the input of true and does not support false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsDefault() {
        return null;
    }

    /**
     * Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOption() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WorkspaceResourceMaxComputeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WorkspaceResourceMaxComputeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WorkspaceResourceMaxComputeProps> {
        java.lang.Object groupName;
        java.lang.Object resources;
        java.lang.Object workspaceId;
        java.lang.Object isDefault;
        java.lang.Object option;

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getGroupName}
         * @param groupName Property groupName: Resource group name. This parameter is required.
         *                  If you want to obtain a resource group name.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getGroupName}
         * @param groupName Property groupName: Resource group name. This parameter is required.
         *                  If you want to obtain a resource group name.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getResources}
         * @param resources Property resources: Resource List. This parameter is required.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getResources}
         * @param resources Property resources: Resource List. This parameter is required.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.lang.Object> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace to which the workspace belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace to which the workspace belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getIsDefault}
         * @param isDefault Property isDefault: Indicates whether it is the default resource.
         *                  Currently, this parameter only supports the input of true and does not support false.
         * @return {@code this}
         */
        public Builder isDefault(java.lang.Boolean isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getIsDefault}
         * @param isDefault Property isDefault: Indicates whether it is the default resource.
         *                  Currently, this parameter only supports the input of true and does not support false.
         * @return {@code this}
         */
        public Builder isDefault(com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getOption}
         * @param option Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.
         * @return {@code this}
         */
        public Builder option(java.lang.String option) {
            this.option = option;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceMaxComputeProps#getOption}
         * @param option Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.
         * @return {@code this}
         */
        public Builder option(com.aliyun.ros.cdk.core.IResolvable option) {
            this.option = option;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WorkspaceResourceMaxComputeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WorkspaceResourceMaxComputeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WorkspaceResourceMaxComputeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WorkspaceResourceMaxComputeProps {
        private final java.lang.Object groupName;
        private final java.lang.Object resources;
        private final java.lang.Object workspaceId;
        private final java.lang.Object isDefault;
        private final java.lang.Object option;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isDefault = software.amazon.jsii.Kernel.get(this, "isDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.option = software.amazon.jsii.Kernel.get(this, "option", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.resources = java.util.Objects.requireNonNull(builder.resources, "resources is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.isDefault = builder.isDefault;
            this.option = builder.option;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getResources() {
            return this.resources;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getIsDefault() {
            return this.isDefault;
        }

        @Override
        public final java.lang.Object getOption() {
            return this.option;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupName", om.valueToTree(this.getGroupName()));
            data.set("resources", om.valueToTree(this.getResources()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getIsDefault() != null) {
                data.set("isDefault", om.valueToTree(this.getIsDefault()));
            }
            if (this.getOption() != null) {
                data.set("option", om.valueToTree(this.getOption()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.WorkspaceResourceMaxComputeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WorkspaceResourceMaxComputeProps.Jsii$Proxy that = (WorkspaceResourceMaxComputeProps.Jsii$Proxy) o;

            if (!groupName.equals(that.groupName)) return false;
            if (!resources.equals(that.resources)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            if (this.isDefault != null ? !this.isDefault.equals(that.isDefault) : that.isDefault != null) return false;
            return this.option != null ? this.option.equals(that.option) : that.option == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupName.hashCode();
            result = 31 * result + (this.resources.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.isDefault != null ? this.isDefault.hashCode() : 0);
            result = 31 * result + (this.option != null ? this.option.hashCode() : 0);
            return result;
        }
    }
}
