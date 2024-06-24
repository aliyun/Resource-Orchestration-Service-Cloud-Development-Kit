package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>RosMonitoringAgent</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagent
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.171Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosMonitoringAgentProps")
@software.amazon.jsii.Jsii.Proxy(RosMonitoringAgentProps.Jsii$Proxy.class)
public interface RosMonitoringAgentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstallCommand() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosMonitoringAgentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosMonitoringAgentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosMonitoringAgentProps> {
        java.lang.Object force;
        java.lang.Object installCommand;
        java.lang.Object instanceIds;

        /**
         * Sets the value of {@link RosMonitoringAgentProps#getForce}
         * @param force the value to be set.
         * @return {@code this}
         */
        public Builder force(java.lang.Boolean force) {
            this.force = force;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitoringAgentProps#getForce}
         * @param force the value to be set.
         * @return {@code this}
         */
        public Builder force(com.aliyun.ros.cdk.core.IResolvable force) {
            this.force = force;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitoringAgentProps#getInstallCommand}
         * @param installCommand the value to be set.
         * @return {@code this}
         */
        public Builder installCommand(java.lang.String installCommand) {
            this.installCommand = installCommand;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitoringAgentProps#getInstallCommand}
         * @param installCommand the value to be set.
         * @return {@code this}
         */
        public Builder installCommand(com.aliyun.ros.cdk.core.IResolvable installCommand) {
            this.installCommand = installCommand;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitoringAgentProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosMonitoringAgentProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosMonitoringAgentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosMonitoringAgentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosMonitoringAgentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosMonitoringAgentProps {
        private final java.lang.Object force;
        private final java.lang.Object installCommand;
        private final java.lang.Object instanceIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.force = software.amazon.jsii.Kernel.get(this, "force", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.installCommand = software.amazon.jsii.Kernel.get(this, "installCommand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.force = builder.force;
            this.installCommand = builder.installCommand;
            this.instanceIds = builder.instanceIds;
        }

        @Override
        public final java.lang.Object getForce() {
            return this.force;
        }

        @Override
        public final java.lang.Object getInstallCommand() {
            return this.installCommand;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getForce() != null) {
                data.set("force", om.valueToTree(this.getForce()));
            }
            if (this.getInstallCommand() != null) {
                data.set("installCommand", om.valueToTree(this.getInstallCommand()));
            }
            if (this.getInstanceIds() != null) {
                data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosMonitoringAgentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosMonitoringAgentProps.Jsii$Proxy that = (RosMonitoringAgentProps.Jsii$Proxy) o;

            if (this.force != null ? !this.force.equals(that.force) : that.force != null) return false;
            if (this.installCommand != null ? !this.installCommand.equals(that.installCommand) : that.installCommand != null) return false;
            return this.instanceIds != null ? this.instanceIds.equals(that.instanceIds) : that.instanceIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.force != null ? this.force.hashCode() : 0;
            result = 31 * result + (this.installCommand != null ? this.installCommand.hashCode() : 0);
            result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
            return result;
        }
    }
}
