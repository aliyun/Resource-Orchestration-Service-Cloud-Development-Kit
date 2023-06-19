package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>ALIYUN::EMR::FlowProject</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:09.918Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.FlowProjectProps")
@software.amazon.jsii.Jsii.Proxy(FlowProjectProps.Jsii$Proxy.class)
public interface FlowProjectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: The description of the project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescription();

    /**
     * Property flowProjectName: The name of the project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFlowProjectName();

    /**
     * Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FlowProjectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FlowProjectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FlowProjectProps> {
        java.lang.Object description;
        java.lang.Object flowProjectName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link FlowProjectProps#getDescription}
         * @param description Property description: The description of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectProps#getDescription}
         * @param description Property description: The description of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectProps#getFlowProjectName}
         * @param flowProjectName Property flowProjectName: The name of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder flowProjectName(java.lang.String flowProjectName) {
            this.flowProjectName = flowProjectName;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectProps#getFlowProjectName}
         * @param flowProjectName Property flowProjectName: The name of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder flowProjectName(com.aliyun.ros.cdk.core.IResolvable flowProjectName) {
            this.flowProjectName = flowProjectName;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link FlowProjectProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FlowProjectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FlowProjectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FlowProjectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FlowProjectProps {
        private final java.lang.Object description;
        private final java.lang.Object flowProjectName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowProjectName = software.amazon.jsii.Kernel.get(this, "flowProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = java.util.Objects.requireNonNull(builder.description, "description is required");
            this.flowProjectName = java.util.Objects.requireNonNull(builder.flowProjectName, "flowProjectName is required");
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getFlowProjectName() {
            return this.flowProjectName;
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

            data.set("description", om.valueToTree(this.getDescription()));
            data.set("flowProjectName", om.valueToTree(this.getFlowProjectName()));
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.FlowProjectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FlowProjectProps.Jsii$Proxy that = (FlowProjectProps.Jsii$Proxy) o;

            if (!description.equals(that.description)) return false;
            if (!flowProjectName.equals(that.flowProjectName)) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description.hashCode();
            result = 31 * result + (this.flowProjectName.hashCode());
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
