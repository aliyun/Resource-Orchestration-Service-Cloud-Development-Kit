package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * Properties for defining a <code>RosGatewayLogging</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.947Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.RosGatewayLoggingProps")
@software.amazon.jsii.Jsii.Proxy(RosGatewayLoggingProps.Jsii$Proxy.class)
public interface RosGatewayLoggingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsLogstore();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSlsProject();

    /**
     * @return a {@link Builder} of {@link RosGatewayLoggingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGatewayLoggingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGatewayLoggingProps> {
        java.lang.Object gatewayId;
        java.lang.Object slsLogstore;
        java.lang.Object slsProject;

        /**
         * Sets the value of {@link RosGatewayLoggingProps#getGatewayId}
         * @param gatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayLoggingProps#getGatewayId}
         * @param gatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayLoggingProps#getSlsLogstore}
         * @param slsLogstore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsLogstore(java.lang.String slsLogstore) {
            this.slsLogstore = slsLogstore;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayLoggingProps#getSlsLogstore}
         * @param slsLogstore the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsLogstore(com.aliyun.ros.cdk.core.IResolvable slsLogstore) {
            this.slsLogstore = slsLogstore;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayLoggingProps#getSlsProject}
         * @param slsProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProject(java.lang.String slsProject) {
            this.slsProject = slsProject;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayLoggingProps#getSlsProject}
         * @param slsProject the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder slsProject(com.aliyun.ros.cdk.core.IResolvable slsProject) {
            this.slsProject = slsProject;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGatewayLoggingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGatewayLoggingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGatewayLoggingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGatewayLoggingProps {
        private final java.lang.Object gatewayId;
        private final java.lang.Object slsLogstore;
        private final java.lang.Object slsProject;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsLogstore = software.amazon.jsii.Kernel.get(this, "slsLogstore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsProject = software.amazon.jsii.Kernel.get(this, "slsProject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayId = java.util.Objects.requireNonNull(builder.gatewayId, "gatewayId is required");
            this.slsLogstore = java.util.Objects.requireNonNull(builder.slsLogstore, "slsLogstore is required");
            this.slsProject = java.util.Objects.requireNonNull(builder.slsProject, "slsProject is required");
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getSlsLogstore() {
            return this.slsLogstore;
        }

        @Override
        public final java.lang.Object getSlsProject() {
            return this.slsProject;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            data.set("slsLogstore", om.valueToTree(this.getSlsLogstore()));
            data.set("slsProject", om.valueToTree(this.getSlsProject()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudstoragegateway.RosGatewayLoggingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGatewayLoggingProps.Jsii$Proxy that = (RosGatewayLoggingProps.Jsii$Proxy) o;

            if (!gatewayId.equals(that.gatewayId)) return false;
            if (!slsLogstore.equals(that.slsLogstore)) return false;
            return this.slsProject.equals(that.slsProject);
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayId.hashCode();
            result = 31 * result + (this.slsLogstore.hashCode());
            result = 31 * result + (this.slsProject.hashCode());
            return result;
        }
    }
}
