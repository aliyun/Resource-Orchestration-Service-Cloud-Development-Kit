package com.aliyun.ros.cdk.emr.datasource;

/**
 * Properties for defining a <code>RosFlowProjects</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:55.358Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.datasource.RosFlowProjectsProps")
@software.amazon.jsii.Jsii.Proxy(RosFlowProjectsProps.Jsii$Proxy.class)
public interface RosFlowProjectsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowProjectId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowProjectName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFlowProjectsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFlowProjectsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFlowProjectsProps> {
        java.lang.Object flowProjectId;
        java.lang.Object flowProjectName;

        /**
         * Sets the value of {@link RosFlowProjectsProps#getFlowProjectId}
         * @param flowProjectId the value to be set.
         * @return {@code this}
         */
        public Builder flowProjectId(java.lang.String flowProjectId) {
            this.flowProjectId = flowProjectId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProjectsProps#getFlowProjectId}
         * @param flowProjectId the value to be set.
         * @return {@code this}
         */
        public Builder flowProjectId(com.aliyun.ros.cdk.core.IResolvable flowProjectId) {
            this.flowProjectId = flowProjectId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProjectsProps#getFlowProjectName}
         * @param flowProjectName the value to be set.
         * @return {@code this}
         */
        public Builder flowProjectName(java.lang.String flowProjectName) {
            this.flowProjectName = flowProjectName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProjectsProps#getFlowProjectName}
         * @param flowProjectName the value to be set.
         * @return {@code this}
         */
        public Builder flowProjectName(com.aliyun.ros.cdk.core.IResolvable flowProjectName) {
            this.flowProjectName = flowProjectName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFlowProjectsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFlowProjectsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFlowProjectsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFlowProjectsProps {
        private final java.lang.Object flowProjectId;
        private final java.lang.Object flowProjectName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.flowProjectId = software.amazon.jsii.Kernel.get(this, "flowProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowProjectName = software.amazon.jsii.Kernel.get(this, "flowProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.flowProjectId = builder.flowProjectId;
            this.flowProjectName = builder.flowProjectName;
        }

        @Override
        public final java.lang.Object getFlowProjectId() {
            return this.flowProjectId;
        }

        @Override
        public final java.lang.Object getFlowProjectName() {
            return this.flowProjectName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getFlowProjectId() != null) {
                data.set("flowProjectId", om.valueToTree(this.getFlowProjectId()));
            }
            if (this.getFlowProjectName() != null) {
                data.set("flowProjectName", om.valueToTree(this.getFlowProjectName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.datasource.RosFlowProjectsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFlowProjectsProps.Jsii$Proxy that = (RosFlowProjectsProps.Jsii$Proxy) o;

            if (this.flowProjectId != null ? !this.flowProjectId.equals(that.flowProjectId) : that.flowProjectId != null) return false;
            return this.flowProjectName != null ? this.flowProjectName.equals(that.flowProjectName) : that.flowProjectName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.flowProjectId != null ? this.flowProjectId.hashCode() : 0;
            result = 31 * result + (this.flowProjectName != null ? this.flowProjectName.hashCode() : 0);
            return result;
        }
    }
}
