package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.921Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.MonitoringAgentProcessProps")
@software.amazon.jsii.Jsii.Proxy(MonitoringAgentProcessProps.Jsii$Proxy.class)
public interface MonitoringAgentProcessProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property processName: The name of the process.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProcessName() {
        return null;
    }

    /**
     * Property processUser: The user who launched the process.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProcessUser() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MonitoringAgentProcessProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MonitoringAgentProcessProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MonitoringAgentProcessProps> {
        private java.lang.Object instanceId;
        private java.lang.Object processName;
        private java.lang.Object processUser;

        /**
         * Sets the value of {@link MonitoringAgentProcessProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link MonitoringAgentProcessProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link MonitoringAgentProcessProps#getProcessName}
         * @param processName Property processName: The name of the process.
         * @return {@code this}
         */
        public Builder processName(java.lang.String processName) {
            this.processName = processName;
            return this;
        }

        /**
         * Sets the value of {@link MonitoringAgentProcessProps#getProcessName}
         * @param processName Property processName: The name of the process.
         * @return {@code this}
         */
        public Builder processName(com.aliyun.ros.cdk.core.IResolvable processName) {
            this.processName = processName;
            return this;
        }

        /**
         * Sets the value of {@link MonitoringAgentProcessProps#getProcessUser}
         * @param processUser Property processUser: The user who launched the process.
         * @return {@code this}
         */
        public Builder processUser(java.lang.String processUser) {
            this.processUser = processUser;
            return this;
        }

        /**
         * Sets the value of {@link MonitoringAgentProcessProps#getProcessUser}
         * @param processUser Property processUser: The user who launched the process.
         * @return {@code this}
         */
        public Builder processUser(com.aliyun.ros.cdk.core.IResolvable processUser) {
            this.processUser = processUser;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MonitoringAgentProcessProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MonitoringAgentProcessProps build() {
            return new Jsii$Proxy(instanceId, processName, processUser);
        }
    }

    /**
     * An implementation for {@link MonitoringAgentProcessProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MonitoringAgentProcessProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object processName;
        private final java.lang.Object processUser;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.processName = software.amazon.jsii.Kernel.get(this, "processName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.processUser = software.amazon.jsii.Kernel.get(this, "processUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object instanceId, final java.lang.Object processName, final java.lang.Object processUser) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.processName = processName;
            this.processUser = processUser;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getProcessName() {
            return this.processName;
        }

        @Override
        public final java.lang.Object getProcessUser() {
            return this.processUser;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getProcessName() != null) {
                data.set("processName", om.valueToTree(this.getProcessName()));
            }
            if (this.getProcessUser() != null) {
                data.set("processUser", om.valueToTree(this.getProcessUser()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.MonitoringAgentProcessProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MonitoringAgentProcessProps.Jsii$Proxy that = (MonitoringAgentProcessProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (this.processName != null ? !this.processName.equals(that.processName) : that.processName != null) return false;
            return this.processUser != null ? this.processUser.equals(that.processUser) : that.processUser == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.processName != null ? this.processName.hashCode() : 0);
            result = 31 * result + (this.processUser != null ? this.processUser.hashCode() : 0);
            return result;
        }
    }
}
