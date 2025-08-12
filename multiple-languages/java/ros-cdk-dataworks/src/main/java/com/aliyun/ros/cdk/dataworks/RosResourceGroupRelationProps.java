package com.aliyun.ros.cdk.dataworks;

/**
 * Properties for defining a <code>RosResourceGroupRelation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.346Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.RosResourceGroupRelationProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceGroupRelationProps.Jsii$Proxy.class)
public interface RosResourceGroupRelationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceGroupId();

    /**
     * @return a {@link Builder} of {@link RosResourceGroupRelationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourceGroupRelationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourceGroupRelationProps> {
        java.lang.Object projectId;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosResourceGroupRelationProps#getProjectId}
         * @param projectId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectId(java.lang.Number projectId) {
            this.projectId = projectId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupRelationProps#getProjectId}
         * @param projectId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectId(com.aliyun.ros.cdk.core.IResolvable projectId) {
            this.projectId = projectId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupRelationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupRelationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourceGroupRelationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourceGroupRelationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourceGroupRelationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourceGroupRelationProps {
        private final java.lang.Object projectId;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.projectId = software.amazon.jsii.Kernel.get(this, "projectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.projectId = java.util.Objects.requireNonNull(builder.projectId, "projectId is required");
            this.resourceGroupId = java.util.Objects.requireNonNull(builder.resourceGroupId, "resourceGroupId is required");
        }

        @Override
        public final java.lang.Object getProjectId() {
            return this.projectId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("projectId", om.valueToTree(this.getProjectId()));
            data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dataworks.RosResourceGroupRelationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourceGroupRelationProps.Jsii$Proxy that = (RosResourceGroupRelationProps.Jsii$Proxy) o;

            if (!projectId.equals(that.projectId)) return false;
            return this.resourceGroupId.equals(that.resourceGroupId);
        }

        @Override
        public final int hashCode() {
            int result = this.projectId.hashCode();
            result = 31 * result + (this.resourceGroupId.hashCode());
            return result;
        }
    }
}
