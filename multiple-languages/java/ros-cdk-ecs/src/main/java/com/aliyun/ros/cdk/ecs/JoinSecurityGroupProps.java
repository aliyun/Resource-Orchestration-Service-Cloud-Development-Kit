package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::JoinSecurityGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.572Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.JoinSecurityGroupProps")
@software.amazon.jsii.Jsii.Proxy(JoinSecurityGroupProps.Jsii$Proxy.class)
public interface JoinSecurityGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSecurityGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIdList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link JoinSecurityGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link JoinSecurityGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<JoinSecurityGroupProps> {
        private java.lang.String securityGroupId;
        private java.lang.String instanceId;
        private java.lang.Object instanceIdList;
        private java.lang.Object networkInterfaceList;

        /**
         * Sets the value of {@link JoinSecurityGroupProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link JoinSecurityGroupProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link JoinSecurityGroupProps#getInstanceIdList}
         * @param instanceIdList the value to be set.
         * @return {@code this}
         */
        public Builder instanceIdList(java.util.List<? extends java.lang.Object> instanceIdList) {
            this.instanceIdList = instanceIdList;
            return this;
        }

        /**
         * Sets the value of {@link JoinSecurityGroupProps#getInstanceIdList}
         * @param instanceIdList the value to be set.
         * @return {@code this}
         */
        public Builder instanceIdList(com.aliyun.ros.cdk.core.IResolvable instanceIdList) {
            this.instanceIdList = instanceIdList;
            return this;
        }

        /**
         * Sets the value of {@link JoinSecurityGroupProps#getNetworkInterfaceList}
         * @param networkInterfaceList the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaceList(java.util.List<? extends java.lang.Object> networkInterfaceList) {
            this.networkInterfaceList = networkInterfaceList;
            return this;
        }

        /**
         * Sets the value of {@link JoinSecurityGroupProps#getNetworkInterfaceList}
         * @param networkInterfaceList the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaceList(com.aliyun.ros.cdk.core.IResolvable networkInterfaceList) {
            this.networkInterfaceList = networkInterfaceList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link JoinSecurityGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public JoinSecurityGroupProps build() {
            return new Jsii$Proxy(securityGroupId, instanceId, instanceIdList, networkInterfaceList);
        }
    }

    /**
     * An implementation for {@link JoinSecurityGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JoinSecurityGroupProps {
        private final java.lang.String securityGroupId;
        private final java.lang.String instanceId;
        private final java.lang.Object instanceIdList;
        private final java.lang.Object networkInterfaceList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceIdList = software.amazon.jsii.Kernel.get(this, "instanceIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceList = software.amazon.jsii.Kernel.get(this, "networkInterfaceList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String securityGroupId, final java.lang.String instanceId, final java.lang.Object instanceIdList, final java.lang.Object networkInterfaceList) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.securityGroupId = java.util.Objects.requireNonNull(securityGroupId, "securityGroupId is required");
            this.instanceId = instanceId;
            this.instanceIdList = instanceIdList;
            this.networkInterfaceList = networkInterfaceList;
        }

        @Override
        public final java.lang.String getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.String getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInstanceIdList() {
            return this.instanceIdList;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceList() {
            return this.networkInterfaceList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getInstanceIdList() != null) {
                data.set("instanceIdList", om.valueToTree(this.getInstanceIdList()));
            }
            if (this.getNetworkInterfaceList() != null) {
                data.set("networkInterfaceList", om.valueToTree(this.getNetworkInterfaceList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.JoinSecurityGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            JoinSecurityGroupProps.Jsii$Proxy that = (JoinSecurityGroupProps.Jsii$Proxy) o;

            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.instanceIdList != null ? !this.instanceIdList.equals(that.instanceIdList) : that.instanceIdList != null) return false;
            return this.networkInterfaceList != null ? this.networkInterfaceList.equals(that.networkInterfaceList) : that.networkInterfaceList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.securityGroupId.hashCode();
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.instanceIdList != null ? this.instanceIdList.hashCode() : 0);
            result = 31 * result + (this.networkInterfaceList != null ? this.networkInterfaceList.hashCode() : 0);
            return result;
        }
    }
}
