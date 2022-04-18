package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::FlowLog`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:27.202Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosFlowLogProps")
@software.amazon.jsii.Jsii.Proxy(RosFlowLogProps.Jsii$Proxy.class)
public interface RosFlowLogProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogStoreName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowLogName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFlowLogProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFlowLogProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFlowLogProps> {
        java.lang.Object logStoreName;
        java.lang.Object projectName;
        java.lang.Object resourceId;
        java.lang.Object resourceType;
        java.lang.Object trafficType;
        java.lang.Object description;
        java.lang.Object flowLogName;

        /**
         * Sets the value of {@link RosFlowLogProps#getLogStoreName}
         * @param logStoreName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logStoreName(java.lang.String logStoreName) {
            this.logStoreName = logStoreName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getLogStoreName}
         * @param logStoreName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logStoreName(com.aliyun.ros.cdk.core.IResolvable logStoreName) {
            this.logStoreName = logStoreName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getResourceId}
         * @param resourceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceId(java.lang.String resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getResourceId}
         * @param resourceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getResourceType}
         * @param resourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getResourceType}
         * @param resourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getTrafficType}
         * @param trafficType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficType(java.lang.String trafficType) {
            this.trafficType = trafficType;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getTrafficType}
         * @param trafficType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficType(com.aliyun.ros.cdk.core.IResolvable trafficType) {
            this.trafficType = trafficType;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getFlowLogName}
         * @param flowLogName the value to be set.
         * @return {@code this}
         */
        public Builder flowLogName(java.lang.String flowLogName) {
            this.flowLogName = flowLogName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getFlowLogName}
         * @param flowLogName the value to be set.
         * @return {@code this}
         */
        public Builder flowLogName(com.aliyun.ros.cdk.core.IResolvable flowLogName) {
            this.flowLogName = flowLogName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFlowLogProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFlowLogProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFlowLogProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFlowLogProps {
        private final java.lang.Object logStoreName;
        private final java.lang.Object projectName;
        private final java.lang.Object resourceId;
        private final java.lang.Object resourceType;
        private final java.lang.Object trafficType;
        private final java.lang.Object description;
        private final java.lang.Object flowLogName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.logStoreName = software.amazon.jsii.Kernel.get(this, "logStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficType = software.amazon.jsii.Kernel.get(this, "trafficType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowLogName = software.amazon.jsii.Kernel.get(this, "flowLogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.logStoreName = java.util.Objects.requireNonNull(builder.logStoreName, "logStoreName is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.resourceId = java.util.Objects.requireNonNull(builder.resourceId, "resourceId is required");
            this.resourceType = java.util.Objects.requireNonNull(builder.resourceType, "resourceType is required");
            this.trafficType = java.util.Objects.requireNonNull(builder.trafficType, "trafficType is required");
            this.description = builder.description;
            this.flowLogName = builder.flowLogName;
        }

        @Override
        public final java.lang.Object getLogStoreName() {
            return this.logStoreName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getResourceId() {
            return this.resourceId;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getTrafficType() {
            return this.trafficType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getFlowLogName() {
            return this.flowLogName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("logStoreName", om.valueToTree(this.getLogStoreName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            data.set("resourceId", om.valueToTree(this.getResourceId()));
            data.set("resourceType", om.valueToTree(this.getResourceType()));
            data.set("trafficType", om.valueToTree(this.getTrafficType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getFlowLogName() != null) {
                data.set("flowLogName", om.valueToTree(this.getFlowLogName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosFlowLogProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFlowLogProps.Jsii$Proxy that = (RosFlowLogProps.Jsii$Proxy) o;

            if (!logStoreName.equals(that.logStoreName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (!resourceId.equals(that.resourceId)) return false;
            if (!resourceType.equals(that.resourceType)) return false;
            if (!trafficType.equals(that.trafficType)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.flowLogName != null ? this.flowLogName.equals(that.flowLogName) : that.flowLogName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.logStoreName.hashCode();
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.resourceId.hashCode());
            result = 31 * result + (this.resourceType.hashCode());
            result = 31 * result + (this.trafficType.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.flowLogName != null ? this.flowLogName.hashCode() : 0);
            return result;
        }
    }
}
