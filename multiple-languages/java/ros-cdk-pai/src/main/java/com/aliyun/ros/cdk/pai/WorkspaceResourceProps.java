package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>WorkspaceResource</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:20:13.897Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.WorkspaceResourceProps")
@software.amazon.jsii.Jsii.Proxy(WorkspaceResourceProps.Jsii$Proxy.class)
public interface WorkspaceResourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property envType: Environment type, possible values: - dev: Development environment.
     * <p>
     * <ul>
     * <li>prod: Production environment.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvType();

    /**
     * Property resourceType: The resource types.
     * <p>
     * Valid values:
     * MaxCompute
     * ECS
     * Lingjun
     * ACS
     * FLINK
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceType();

    /**
     * Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     * Property workspaceResourceName: The resource name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceResourceName();

    /**
     * Property groupName: Resource group name.
     * <p>
     * If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     * Property isDefault: Whether it is the default resource, each resource type has a default resource.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li>true: is the default resource.</li>
     * <li>false: Not the default resource.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsDefault() {
        return null;
    }

    /**
     * Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WorkspaceResourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WorkspaceResourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WorkspaceResourceProps> {
        java.lang.Object envType;
        java.lang.Object resourceType;
        java.lang.Object workspaceId;
        java.lang.Object workspaceResourceName;
        java.lang.Object groupName;
        java.lang.Object isDefault;
        java.lang.Object spec;

        /**
         * Sets the value of {@link WorkspaceResourceProps#getEnvType}
         * @param envType Property envType: Environment type, possible values: - dev: Development environment. This parameter is required.
         *                <ul>
         *                <li>prod: Production environment.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder envType(java.lang.String envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getEnvType}
         * @param envType Property envType: Environment type, possible values: - dev: Development environment. This parameter is required.
         *                <ul>
         *                <li>prod: Production environment.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder envType(com.aliyun.ros.cdk.core.IResolvable envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getResourceType}
         * @param resourceType Property resourceType: The resource types. This parameter is required.
         *                     Valid values:
         *                     MaxCompute
         *                     ECS
         *                     Lingjun
         *                     ACS
         *                     FLINK
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getResourceType}
         * @param resourceType Property resourceType: The resource types. This parameter is required.
         *                     Valid values:
         *                     MaxCompute
         *                     ECS
         *                     Lingjun
         *                     ACS
         *                     FLINK
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace to which the workspace belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace to which the workspace belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getWorkspaceResourceName}
         * @param workspaceResourceName Property workspaceResourceName: The resource name. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceResourceName(java.lang.String workspaceResourceName) {
            this.workspaceResourceName = workspaceResourceName;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getWorkspaceResourceName}
         * @param workspaceResourceName Property workspaceResourceName: The resource name. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceResourceName(com.aliyun.ros.cdk.core.IResolvable workspaceResourceName) {
            this.workspaceResourceName = workspaceResourceName;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getGroupName}
         * @param groupName Property groupName: Resource group name.
         *                  If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getGroupName}
         * @param groupName Property groupName: Resource group name.
         *                  If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getIsDefault}
         * @param isDefault Property isDefault: Whether it is the default resource, each resource type has a default resource.
         *                  Possible values:
         *                  <p>
         *                  <ul>
         *                  <li>true: is the default resource.</li>
         *                  <li>false: Not the default resource.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder isDefault(java.lang.Boolean isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getIsDefault}
         * @param isDefault Property isDefault: Whether it is the default resource, each resource type has a default resource.
         *                  Possible values:
         *                  <p>
         *                  <ul>
         *                  <li>true: is the default resource.</li>
         *                  <li>false: Not the default resource.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder isDefault(com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.isDefault = isDefault;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getSpec}
         * @param spec Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link WorkspaceResourceProps#getSpec}
         * @param spec Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
         * @return {@code this}
         */
        public Builder spec(java.util.Map<java.lang.String, ? extends java.lang.Object> spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WorkspaceResourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WorkspaceResourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WorkspaceResourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WorkspaceResourceProps {
        private final java.lang.Object envType;
        private final java.lang.Object resourceType;
        private final java.lang.Object workspaceId;
        private final java.lang.Object workspaceResourceName;
        private final java.lang.Object groupName;
        private final java.lang.Object isDefault;
        private final java.lang.Object spec;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.envType = software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceResourceName = software.amazon.jsii.Kernel.get(this, "workspaceResourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isDefault = software.amazon.jsii.Kernel.get(this, "isDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.envType = java.util.Objects.requireNonNull(builder.envType, "envType is required");
            this.resourceType = java.util.Objects.requireNonNull(builder.resourceType, "resourceType is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.workspaceResourceName = java.util.Objects.requireNonNull(builder.workspaceResourceName, "workspaceResourceName is required");
            this.groupName = builder.groupName;
            this.isDefault = builder.isDefault;
            this.spec = builder.spec;
        }

        @Override
        public final java.lang.Object getEnvType() {
            return this.envType;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getWorkspaceResourceName() {
            return this.workspaceResourceName;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getIsDefault() {
            return this.isDefault;
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
            data.set("resourceType", om.valueToTree(this.getResourceType()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            data.set("workspaceResourceName", om.valueToTree(this.getWorkspaceResourceName()));
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getIsDefault() != null) {
                data.set("isDefault", om.valueToTree(this.getIsDefault()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.WorkspaceResourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WorkspaceResourceProps.Jsii$Proxy that = (WorkspaceResourceProps.Jsii$Proxy) o;

            if (!envType.equals(that.envType)) return false;
            if (!resourceType.equals(that.resourceType)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            if (!workspaceResourceName.equals(that.workspaceResourceName)) return false;
            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            if (this.isDefault != null ? !this.isDefault.equals(that.isDefault) : that.isDefault != null) return false;
            return this.spec != null ? this.spec.equals(that.spec) : that.spec == null;
        }

        @Override
        public final int hashCode() {
            int result = this.envType.hashCode();
            result = 31 * result + (this.resourceType.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.workspaceResourceName.hashCode());
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            result = 31 * result + (this.isDefault != null ? this.isDefault.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            return result;
        }
    }
}
