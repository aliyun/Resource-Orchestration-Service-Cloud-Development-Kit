package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>DATASOURCE::VPC::FlowLogs</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.923Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosFlowLogsProps")
@software.amazon.jsii.Jsii.Proxy(RosFlowLogsProps.Jsii$Proxy.class)
public interface RosFlowLogsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowLogId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowLogName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogStoreName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProjectName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFlowLogsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFlowLogsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFlowLogsProps> {
        java.lang.Object description;
        java.lang.Object flowLogId;
        java.lang.Object flowLogName;
        java.lang.Object logStoreName;
        java.lang.Object projectName;
        java.lang.Object resourceId;
        java.lang.Object resourceType;
        java.lang.Object trafficType;

        /**
         * Sets the value of {@link RosFlowLogsProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getFlowLogId}
         * @param flowLogId the value to be set.
         * @return {@code this}
         */
        public Builder flowLogId(java.lang.String flowLogId) {
            this.flowLogId = flowLogId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getFlowLogId}
         * @param flowLogId the value to be set.
         * @return {@code this}
         */
        public Builder flowLogId(com.aliyun.ros.cdk.core.IResolvable flowLogId) {
            this.flowLogId = flowLogId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getFlowLogName}
         * @param flowLogName the value to be set.
         * @return {@code this}
         */
        public Builder flowLogName(java.lang.String flowLogName) {
            this.flowLogName = flowLogName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getFlowLogName}
         * @param flowLogName the value to be set.
         * @return {@code this}
         */
        public Builder flowLogName(com.aliyun.ros.cdk.core.IResolvable flowLogName) {
            this.flowLogName = flowLogName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getLogStoreName}
         * @param logStoreName the value to be set.
         * @return {@code this}
         */
        public Builder logStoreName(java.lang.String logStoreName) {
            this.logStoreName = logStoreName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getLogStoreName}
         * @param logStoreName the value to be set.
         * @return {@code this}
         */
        public Builder logStoreName(com.aliyun.ros.cdk.core.IResolvable logStoreName) {
            this.logStoreName = logStoreName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getProjectName}
         * @param projectName the value to be set.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getProjectName}
         * @param projectName the value to be set.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getResourceId}
         * @param resourceId the value to be set.
         * @return {@code this}
         */
        public Builder resourceId(java.lang.String resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getResourceId}
         * @param resourceId the value to be set.
         * @return {@code this}
         */
        public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getResourceType}
         * @param resourceType the value to be set.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getResourceType}
         * @param resourceType the value to be set.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getTrafficType}
         * @param trafficType the value to be set.
         * @return {@code this}
         */
        public Builder trafficType(java.lang.String trafficType) {
            this.trafficType = trafficType;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogsProps#getTrafficType}
         * @param trafficType the value to be set.
         * @return {@code this}
         */
        public Builder trafficType(com.aliyun.ros.cdk.core.IResolvable trafficType) {
            this.trafficType = trafficType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFlowLogsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFlowLogsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFlowLogsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFlowLogsProps {
        private final java.lang.Object description;
        private final java.lang.Object flowLogId;
        private final java.lang.Object flowLogName;
        private final java.lang.Object logStoreName;
        private final java.lang.Object projectName;
        private final java.lang.Object resourceId;
        private final java.lang.Object resourceType;
        private final java.lang.Object trafficType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowLogId = software.amazon.jsii.Kernel.get(this, "flowLogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowLogName = software.amazon.jsii.Kernel.get(this, "flowLogName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logStoreName = software.amazon.jsii.Kernel.get(this, "logStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficType = software.amazon.jsii.Kernel.get(this, "trafficType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.flowLogId = builder.flowLogId;
            this.flowLogName = builder.flowLogName;
            this.logStoreName = builder.logStoreName;
            this.projectName = builder.projectName;
            this.resourceId = builder.resourceId;
            this.resourceType = builder.resourceType;
            this.trafficType = builder.trafficType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getFlowLogId() {
            return this.flowLogId;
        }

        @Override
        public final java.lang.Object getFlowLogName() {
            return this.flowLogName;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getFlowLogId() != null) {
                data.set("flowLogId", om.valueToTree(this.getFlowLogId()));
            }
            if (this.getFlowLogName() != null) {
                data.set("flowLogName", om.valueToTree(this.getFlowLogName()));
            }
            if (this.getLogStoreName() != null) {
                data.set("logStoreName", om.valueToTree(this.getLogStoreName()));
            }
            if (this.getProjectName() != null) {
                data.set("projectName", om.valueToTree(this.getProjectName()));
            }
            if (this.getResourceId() != null) {
                data.set("resourceId", om.valueToTree(this.getResourceId()));
            }
            if (this.getResourceType() != null) {
                data.set("resourceType", om.valueToTree(this.getResourceType()));
            }
            if (this.getTrafficType() != null) {
                data.set("trafficType", om.valueToTree(this.getTrafficType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosFlowLogsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFlowLogsProps.Jsii$Proxy that = (RosFlowLogsProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.flowLogId != null ? !this.flowLogId.equals(that.flowLogId) : that.flowLogId != null) return false;
            if (this.flowLogName != null ? !this.flowLogName.equals(that.flowLogName) : that.flowLogName != null) return false;
            if (this.logStoreName != null ? !this.logStoreName.equals(that.logStoreName) : that.logStoreName != null) return false;
            if (this.projectName != null ? !this.projectName.equals(that.projectName) : that.projectName != null) return false;
            if (this.resourceId != null ? !this.resourceId.equals(that.resourceId) : that.resourceId != null) return false;
            if (this.resourceType != null ? !this.resourceType.equals(that.resourceType) : that.resourceType != null) return false;
            return this.trafficType != null ? this.trafficType.equals(that.trafficType) : that.trafficType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.flowLogId != null ? this.flowLogId.hashCode() : 0);
            result = 31 * result + (this.flowLogName != null ? this.flowLogName.hashCode() : 0);
            result = 31 * result + (this.logStoreName != null ? this.logStoreName.hashCode() : 0);
            result = 31 * result + (this.projectName != null ? this.projectName.hashCode() : 0);
            result = 31 * result + (this.resourceId != null ? this.resourceId.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            result = 31 * result + (this.trafficType != null ? this.trafficType.hashCode() : 0);
            return result;
        }
    }
}
