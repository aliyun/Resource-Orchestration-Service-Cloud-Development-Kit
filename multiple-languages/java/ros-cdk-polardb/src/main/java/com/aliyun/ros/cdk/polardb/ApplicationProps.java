package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>Application</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-application
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:28:24.406Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.ApplicationProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationProps.Jsii$Proxy.class)
public interface ApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property applicationType: The type of the application.
     * <p>
     * This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationType();

    /**
     * Property architecture: The architecture of the application.
     * <p>
     * This parameter is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArchitecture();

    /**
     * Property dbClusterId: The ID of the database cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property autoCreatePolarFs: Whether to auto create PolarFS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreatePolarFs() {
        return null;
    }

    /**
     * Property components: The list of components.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComponents() {
        return null;
    }

    /**
     * Property description: The description of the application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property payType: The billing method of the cluster.
     * <p>
     * Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property period: The period of the application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property polarFsInstanceId: The ID of the PolarFS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolarFsInstanceId() {
        return null;
    }

    /**
     * Property securityGroupId: The ID of the security group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property securityIpList: The security IP list of the component.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationProps> {
        java.lang.Object applicationType;
        java.lang.Object architecture;
        java.lang.Object dbClusterId;
        java.lang.Object autoCreatePolarFs;
        java.lang.Object components;
        java.lang.Object description;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object polarFsInstanceId;
        java.lang.Object securityGroupId;
        java.lang.Object securityIpList;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ApplicationProps#getApplicationType}
         * @param applicationType Property applicationType: The type of the application. This parameter is required.
         *                        This parameter is required.
         * @return {@code this}
         */
        public Builder applicationType(java.lang.String applicationType) {
            this.applicationType = applicationType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getApplicationType}
         * @param applicationType Property applicationType: The type of the application. This parameter is required.
         *                        This parameter is required.
         * @return {@code this}
         */
        public Builder applicationType(com.aliyun.ros.cdk.core.IResolvable applicationType) {
            this.applicationType = applicationType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getArchitecture}
         * @param architecture Property architecture: The architecture of the application. This parameter is required.
         *                     This parameter is required.
         * @return {@code this}
         */
        public Builder architecture(java.lang.String architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getArchitecture}
         * @param architecture Property architecture: The architecture of the application. This parameter is required.
         *                     This parameter is required.
         * @return {@code this}
         */
        public Builder architecture(com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the database cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the database cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAutoCreatePolarFs}
         * @param autoCreatePolarFs Property autoCreatePolarFs: Whether to auto create PolarFS.
         * @return {@code this}
         */
        public Builder autoCreatePolarFs(java.lang.Boolean autoCreatePolarFs) {
            this.autoCreatePolarFs = autoCreatePolarFs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAutoCreatePolarFs}
         * @param autoCreatePolarFs Property autoCreatePolarFs: Whether to auto create PolarFS.
         * @return {@code this}
         */
        public Builder autoCreatePolarFs(com.aliyun.ros.cdk.core.IResolvable autoCreatePolarFs) {
            this.autoCreatePolarFs = autoCreatePolarFs;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getComponents}
         * @param components Property components: The list of components.
         * @return {@code this}
         */
        public Builder components(com.aliyun.ros.cdk.core.IResolvable components) {
            this.components = components;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getComponents}
         * @param components Property components: The list of components.
         * @return {@code this}
         */
        public Builder components(java.util.List<? extends java.lang.Object> components) {
            this.components = components;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDescription}
         * @param description Property description: The description of the application.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDescription}
         * @param description Property description: The description of the application.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPayType}
         * @param payType Property payType: The billing method of the cluster.
         *                Valid values:
         *                Postpaid: pay-as-you-go
         *                Prepaid: subscription
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPayType}
         * @param payType Property payType: The billing method of the cluster.
         *                Valid values:
         *                Postpaid: pay-as-you-go
         *                Prepaid: subscription
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPeriod}
         * @param period Property period: The period of the application.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPeriod}
         * @param period Property period: The period of the application.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPolarFsInstanceId}
         * @param polarFsInstanceId Property polarFsInstanceId: The ID of the PolarFS instance.
         * @return {@code this}
         */
        public Builder polarFsInstanceId(java.lang.String polarFsInstanceId) {
            this.polarFsInstanceId = polarFsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPolarFsInstanceId}
         * @param polarFsInstanceId Property polarFsInstanceId: The ID of the PolarFS instance.
         * @return {@code this}
         */
        public Builder polarFsInstanceId(com.aliyun.ros.cdk.core.IResolvable polarFsInstanceId) {
            this.polarFsInstanceId = polarFsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The security IP list of the component.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The security IP list of the component.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationProps {
        private final java.lang.Object applicationType;
        private final java.lang.Object architecture;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object autoCreatePolarFs;
        private final java.lang.Object components;
        private final java.lang.Object description;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object polarFsInstanceId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityIpList;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.applicationType = software.amazon.jsii.Kernel.get(this, "applicationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.architecture = software.amazon.jsii.Kernel.get(this, "architecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoCreatePolarFs = software.amazon.jsii.Kernel.get(this, "autoCreatePolarFs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.components = software.amazon.jsii.Kernel.get(this, "components", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.polarFsInstanceId = software.amazon.jsii.Kernel.get(this, "polarFsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.applicationType = java.util.Objects.requireNonNull(builder.applicationType, "applicationType is required");
            this.architecture = java.util.Objects.requireNonNull(builder.architecture, "architecture is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.autoCreatePolarFs = builder.autoCreatePolarFs;
            this.components = builder.components;
            this.description = builder.description;
            this.payType = builder.payType;
            this.period = builder.period;
            this.polarFsInstanceId = builder.polarFsInstanceId;
            this.securityGroupId = builder.securityGroupId;
            this.securityIpList = builder.securityIpList;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getApplicationType() {
            return this.applicationType;
        }

        @Override
        public final java.lang.Object getArchitecture() {
            return this.architecture;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getAutoCreatePolarFs() {
            return this.autoCreatePolarFs;
        }

        @Override
        public final java.lang.Object getComponents() {
            return this.components;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPolarFsInstanceId() {
            return this.polarFsInstanceId;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
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
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("applicationType", om.valueToTree(this.getApplicationType()));
            data.set("architecture", om.valueToTree(this.getArchitecture()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            if (this.getAutoCreatePolarFs() != null) {
                data.set("autoCreatePolarFs", om.valueToTree(this.getAutoCreatePolarFs()));
            }
            if (this.getComponents() != null) {
                data.set("components", om.valueToTree(this.getComponents()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPolarFsInstanceId() != null) {
                data.set("polarFsInstanceId", om.valueToTree(this.getPolarFsInstanceId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.ApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationProps.Jsii$Proxy that = (ApplicationProps.Jsii$Proxy) o;

            if (!applicationType.equals(that.applicationType)) return false;
            if (!architecture.equals(that.architecture)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (this.autoCreatePolarFs != null ? !this.autoCreatePolarFs.equals(that.autoCreatePolarFs) : that.autoCreatePolarFs != null) return false;
            if (this.components != null ? !this.components.equals(that.components) : that.components != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.polarFsInstanceId != null ? !this.polarFsInstanceId.equals(that.polarFsInstanceId) : that.polarFsInstanceId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.applicationType.hashCode();
            result = 31 * result + (this.architecture.hashCode());
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.autoCreatePolarFs != null ? this.autoCreatePolarFs.hashCode() : 0);
            result = 31 * result + (this.components != null ? this.components.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.polarFsInstanceId != null ? this.polarFsInstanceId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
