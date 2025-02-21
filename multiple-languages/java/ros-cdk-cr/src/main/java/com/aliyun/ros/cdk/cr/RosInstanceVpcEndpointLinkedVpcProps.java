package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a <code>RosInstanceVpcEndpointLinkedVpc</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.489Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosInstanceVpcEndpointLinkedVpcProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceVpcEndpointLinkedVpcProps.Jsii$Proxy.class)
public interface RosInstanceVpcEndpointLinkedVpcProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVswitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableCreateDnsRecordInPvzt() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getModuleName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceVpcEndpointLinkedVpcProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceVpcEndpointLinkedVpcProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceVpcEndpointLinkedVpcProps> {
        java.lang.Object instanceId;
        java.lang.Object vpcId;
        java.lang.Object vswitchId;
        java.lang.Object enableCreateDnsRecordInPvzt;
        java.lang.Object moduleName;

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getVswitchId}
         * @param vswitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vswitchId(java.lang.String vswitchId) {
            this.vswitchId = vswitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getVswitchId}
         * @param vswitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vswitchId(com.aliyun.ros.cdk.core.IResolvable vswitchId) {
            this.vswitchId = vswitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getEnableCreateDnsRecordInPvzt}
         * @param enableCreateDnsRecordInPvzt the value to be set.
         * @return {@code this}
         */
        public Builder enableCreateDnsRecordInPvzt(java.lang.Boolean enableCreateDnsRecordInPvzt) {
            this.enableCreateDnsRecordInPvzt = enableCreateDnsRecordInPvzt;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getEnableCreateDnsRecordInPvzt}
         * @param enableCreateDnsRecordInPvzt the value to be set.
         * @return {@code this}
         */
        public Builder enableCreateDnsRecordInPvzt(com.aliyun.ros.cdk.core.IResolvable enableCreateDnsRecordInPvzt) {
            this.enableCreateDnsRecordInPvzt = enableCreateDnsRecordInPvzt;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getModuleName}
         * @param moduleName the value to be set.
         * @return {@code this}
         */
        public Builder moduleName(java.lang.String moduleName) {
            this.moduleName = moduleName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceVpcEndpointLinkedVpcProps#getModuleName}
         * @param moduleName the value to be set.
         * @return {@code this}
         */
        public Builder moduleName(com.aliyun.ros.cdk.core.IResolvable moduleName) {
            this.moduleName = moduleName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceVpcEndpointLinkedVpcProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceVpcEndpointLinkedVpcProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceVpcEndpointLinkedVpcProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceVpcEndpointLinkedVpcProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object vpcId;
        private final java.lang.Object vswitchId;
        private final java.lang.Object enableCreateDnsRecordInPvzt;
        private final java.lang.Object moduleName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vswitchId = software.amazon.jsii.Kernel.get(this, "vswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableCreateDnsRecordInPvzt = software.amazon.jsii.Kernel.get(this, "enableCreateDnsRecordInPvzt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.moduleName = software.amazon.jsii.Kernel.get(this, "moduleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vswitchId = java.util.Objects.requireNonNull(builder.vswitchId, "vswitchId is required");
            this.enableCreateDnsRecordInPvzt = builder.enableCreateDnsRecordInPvzt;
            this.moduleName = builder.moduleName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVswitchId() {
            return this.vswitchId;
        }

        @Override
        public final java.lang.Object getEnableCreateDnsRecordInPvzt() {
            return this.enableCreateDnsRecordInPvzt;
        }

        @Override
        public final java.lang.Object getModuleName() {
            return this.moduleName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vswitchId", om.valueToTree(this.getVswitchId()));
            if (this.getEnableCreateDnsRecordInPvzt() != null) {
                data.set("enableCreateDnsRecordInPvzt", om.valueToTree(this.getEnableCreateDnsRecordInPvzt()));
            }
            if (this.getModuleName() != null) {
                data.set("moduleName", om.valueToTree(this.getModuleName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.RosInstanceVpcEndpointLinkedVpcProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceVpcEndpointLinkedVpcProps.Jsii$Proxy that = (RosInstanceVpcEndpointLinkedVpcProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vswitchId.equals(that.vswitchId)) return false;
            if (this.enableCreateDnsRecordInPvzt != null ? !this.enableCreateDnsRecordInPvzt.equals(that.enableCreateDnsRecordInPvzt) : that.enableCreateDnsRecordInPvzt != null) return false;
            return this.moduleName != null ? this.moduleName.equals(that.moduleName) : that.moduleName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vswitchId.hashCode());
            result = 31 * result + (this.enableCreateDnsRecordInPvzt != null ? this.enableCreateDnsRecordInPvzt.hashCode() : 0);
            result = 31 * result + (this.moduleName != null ? this.moduleName.hashCode() : 0);
            return result;
        }
    }
}
