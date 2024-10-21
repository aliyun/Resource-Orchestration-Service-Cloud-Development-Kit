package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>RosGateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:31.695Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayProps")
@software.amazon.jsii.Jsii.Proxy(RosGatewayProps.Jsii$Proxy.class)
public interface RosGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplica();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpec();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnterpriseSecurityGroup() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetSlbSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlbSpec() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGatewayProps> {
        java.lang.Object replica;
        java.lang.Object spec;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object backupVSwitchId;
        java.lang.Object enterpriseSecurityGroup;
        java.lang.Object internetSlbSpec;
        java.lang.Object name;
        java.lang.Object slbSpec;

        /**
         * Sets the value of {@link RosGatewayProps#getReplica}
         * @param replica the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replica(java.lang.Number replica) {
            this.replica = replica;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getReplica}
         * @param replica the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replica(com.aliyun.ros.cdk.core.IResolvable replica) {
            this.replica = replica;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getSpec}
         * @param spec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getSpec}
         * @param spec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getBackupVSwitchId}
         * @param backupVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder backupVSwitchId(java.lang.String backupVSwitchId) {
            this.backupVSwitchId = backupVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getBackupVSwitchId}
         * @param backupVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder backupVSwitchId(com.aliyun.ros.cdk.core.IResolvable backupVSwitchId) {
            this.backupVSwitchId = backupVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getEnterpriseSecurityGroup}
         * @param enterpriseSecurityGroup the value to be set.
         * @return {@code this}
         */
        public Builder enterpriseSecurityGroup(java.lang.String enterpriseSecurityGroup) {
            this.enterpriseSecurityGroup = enterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getEnterpriseSecurityGroup}
         * @param enterpriseSecurityGroup the value to be set.
         * @return {@code this}
         */
        public Builder enterpriseSecurityGroup(com.aliyun.ros.cdk.core.IResolvable enterpriseSecurityGroup) {
            this.enterpriseSecurityGroup = enterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getInternetSlbSpec}
         * @param internetSlbSpec the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbSpec(java.lang.String internetSlbSpec) {
            this.internetSlbSpec = internetSlbSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getInternetSlbSpec}
         * @param internetSlbSpec the value to be set.
         * @return {@code this}
         */
        public Builder internetSlbSpec(com.aliyun.ros.cdk.core.IResolvable internetSlbSpec) {
            this.internetSlbSpec = internetSlbSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getSlbSpec}
         * @param slbSpec the value to be set.
         * @return {@code this}
         */
        public Builder slbSpec(java.lang.String slbSpec) {
            this.slbSpec = slbSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getSlbSpec}
         * @param slbSpec the value to be set.
         * @return {@code this}
         */
        public Builder slbSpec(com.aliyun.ros.cdk.core.IResolvable slbSpec) {
            this.slbSpec = slbSpec;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGatewayProps {
        private final java.lang.Object replica;
        private final java.lang.Object spec;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object backupVSwitchId;
        private final java.lang.Object enterpriseSecurityGroup;
        private final java.lang.Object internetSlbSpec;
        private final java.lang.Object name;
        private final java.lang.Object slbSpec;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.replica = software.amazon.jsii.Kernel.get(this, "replica", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupVSwitchId = software.amazon.jsii.Kernel.get(this, "backupVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "enterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetSlbSpec = software.amazon.jsii.Kernel.get(this, "internetSlbSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slbSpec = software.amazon.jsii.Kernel.get(this, "slbSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.replica = java.util.Objects.requireNonNull(builder.replica, "replica is required");
            this.spec = java.util.Objects.requireNonNull(builder.spec, "spec is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.backupVSwitchId = builder.backupVSwitchId;
            this.enterpriseSecurityGroup = builder.enterpriseSecurityGroup;
            this.internetSlbSpec = builder.internetSlbSpec;
            this.name = builder.name;
            this.slbSpec = builder.slbSpec;
        }

        @Override
        public final java.lang.Object getReplica() {
            return this.replica;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getBackupVSwitchId() {
            return this.backupVSwitchId;
        }

        @Override
        public final java.lang.Object getEnterpriseSecurityGroup() {
            return this.enterpriseSecurityGroup;
        }

        @Override
        public final java.lang.Object getInternetSlbSpec() {
            return this.internetSlbSpec;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getSlbSpec() {
            return this.slbSpec;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("replica", om.valueToTree(this.getReplica()));
            data.set("spec", om.valueToTree(this.getSpec()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getBackupVSwitchId() != null) {
                data.set("backupVSwitchId", om.valueToTree(this.getBackupVSwitchId()));
            }
            if (this.getEnterpriseSecurityGroup() != null) {
                data.set("enterpriseSecurityGroup", om.valueToTree(this.getEnterpriseSecurityGroup()));
            }
            if (this.getInternetSlbSpec() != null) {
                data.set("internetSlbSpec", om.valueToTree(this.getInternetSlbSpec()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getSlbSpec() != null) {
                data.set("slbSpec", om.valueToTree(this.getSlbSpec()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGatewayProps.Jsii$Proxy that = (RosGatewayProps.Jsii$Proxy) o;

            if (!replica.equals(that.replica)) return false;
            if (!spec.equals(that.spec)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.backupVSwitchId != null ? !this.backupVSwitchId.equals(that.backupVSwitchId) : that.backupVSwitchId != null) return false;
            if (this.enterpriseSecurityGroup != null ? !this.enterpriseSecurityGroup.equals(that.enterpriseSecurityGroup) : that.enterpriseSecurityGroup != null) return false;
            if (this.internetSlbSpec != null ? !this.internetSlbSpec.equals(that.internetSlbSpec) : that.internetSlbSpec != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.slbSpec != null ? this.slbSpec.equals(that.slbSpec) : that.slbSpec == null;
        }

        @Override
        public final int hashCode() {
            int result = this.replica.hashCode();
            result = 31 * result + (this.spec.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.backupVSwitchId != null ? this.backupVSwitchId.hashCode() : 0);
            result = 31 * result + (this.enterpriseSecurityGroup != null ? this.enterpriseSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.internetSlbSpec != null ? this.internetSlbSpec.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.slbSpec != null ? this.slbSpec.hashCode() : 0);
            return result;
        }
    }
}
