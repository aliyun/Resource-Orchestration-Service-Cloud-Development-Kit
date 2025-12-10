package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.967Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition.
     * <p>
     * Valid values:
     * Basic: Basic instance
     * Standard: Standard instance
     * Advanced: Advanced Edition Instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property imageScanner: Security scan engine.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageScanner() {
        return null;
    }

    /**
     * Property instanceStorageName: Custom OSS Bucket name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceStorageName() {
        return null;
    }

    /**
     * Property period: Prepaid cycle.
     * <p>
     * The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
     * <p>
     * <ul>
     * <li>ManualRenewal: manual renewal.
     * Default ManualRenewal.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewalStatus() {
        return null;
    }

    /**
     * Property renewPeriod: Automatic renewal cycle, in months.
     * <p>
     * When RenewalStatus is set to AutoRenewal, it must be set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewPeriod() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object instanceName;
        java.lang.Object instanceType;
        java.lang.Object imageScanner;
        java.lang.Object instanceStorageName;
        java.lang.Object period;
        java.lang.Object renewalStatus;
        java.lang.Object renewPeriod;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last). This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last). This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. This parameter is required.
         *                     Valid values:
         *                     Basic: Basic instance
         *                     Standard: Standard instance
         *                     Advanced: Advanced Edition Instance.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition. This parameter is required.
         *                     Valid values:
         *                     Basic: Basic instance
         *                     Standard: Standard instance
         *                     Advanced: Advanced Edition Instance.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageScanner}
         * @param imageScanner Property imageScanner: Security scan engine.
         * @return {@code this}
         */
        public Builder imageScanner(java.lang.String imageScanner) {
            this.imageScanner = imageScanner;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageScanner}
         * @param imageScanner Property imageScanner: Security scan engine.
         * @return {@code this}
         */
        public Builder imageScanner(com.aliyun.ros.cdk.core.IResolvable imageScanner) {
            this.imageScanner = imageScanner;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceStorageName}
         * @param instanceStorageName Property instanceStorageName: Custom OSS Bucket name.
         * @return {@code this}
         */
        public Builder instanceStorageName(java.lang.String instanceStorageName) {
            this.instanceStorageName = instanceStorageName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceStorageName}
         * @param instanceStorageName Property instanceStorageName: Custom OSS Bucket name.
         * @return {@code this}
         */
        public Builder instanceStorageName(com.aliyun.ros.cdk.core.IResolvable instanceStorageName) {
            this.instanceStorageName = instanceStorageName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: Prepaid cycle.
         *               The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: Prepaid cycle.
         *               The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRenewalStatus}
         * @param renewalStatus Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
         *                      <ul>
         *                      <li>ManualRenewal: manual renewal.
         *                      Default ManualRenewal.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder renewalStatus(java.lang.String renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRenewalStatus}
         * @param renewalStatus Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
         *                      <ul>
         *                      <li>ManualRenewal: manual renewal.
         *                      Default ManualRenewal.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder renewalStatus(com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRenewPeriod}
         * @param renewPeriod Property renewPeriod: Automatic renewal cycle, in months.
         *                    When RenewalStatus is set to AutoRenewal, it must be set.
         * @return {@code this}
         */
        public Builder renewPeriod(java.lang.Number renewPeriod) {
            this.renewPeriod = renewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getRenewPeriod}
         * @param renewPeriod Property renewPeriod: Automatic renewal cycle, in months.
         *                    When RenewalStatus is set to AutoRenewal, it must be set.
         * @return {@code this}
         */
        public Builder renewPeriod(com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.renewPeriod = renewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceType;
        private final java.lang.Object imageScanner;
        private final java.lang.Object instanceStorageName;
        private final java.lang.Object period;
        private final java.lang.Object renewalStatus;
        private final java.lang.Object renewPeriod;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageScanner = software.amazon.jsii.Kernel.get(this, "imageScanner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceStorageName = software.amazon.jsii.Kernel.get(this, "instanceStorageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewalStatus = software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewPeriod = software.amazon.jsii.Kernel.get(this, "renewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.imageScanner = builder.imageScanner;
            this.instanceStorageName = builder.instanceStorageName;
            this.period = builder.period;
            this.renewalStatus = builder.renewalStatus;
            this.renewPeriod = builder.renewPeriod;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getImageScanner() {
            return this.imageScanner;
        }

        @Override
        public final java.lang.Object getInstanceStorageName() {
            return this.instanceStorageName;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getRenewalStatus() {
            return this.renewalStatus;
        }

        @Override
        public final java.lang.Object getRenewPeriod() {
            return this.renewPeriod;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            if (this.getImageScanner() != null) {
                data.set("imageScanner", om.valueToTree(this.getImageScanner()));
            }
            if (this.getInstanceStorageName() != null) {
                data.set("instanceStorageName", om.valueToTree(this.getInstanceStorageName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getRenewalStatus() != null) {
                data.set("renewalStatus", om.valueToTree(this.getRenewalStatus()));
            }
            if (this.getRenewPeriod() != null) {
                data.set("renewPeriod", om.valueToTree(this.getRenewPeriod()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!instanceName.equals(that.instanceName)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (this.imageScanner != null ? !this.imageScanner.equals(that.imageScanner) : that.imageScanner != null) return false;
            if (this.instanceStorageName != null ? !this.instanceStorageName.equals(that.instanceStorageName) : that.instanceStorageName != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.renewalStatus != null ? !this.renewalStatus.equals(that.renewalStatus) : that.renewalStatus != null) return false;
            if (this.renewPeriod != null ? !this.renewPeriod.equals(that.renewPeriod) : that.renewPeriod != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceName.hashCode();
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.imageScanner != null ? this.imageScanner.hashCode() : 0);
            result = 31 * result + (this.instanceStorageName != null ? this.instanceStorageName.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.renewalStatus != null ? this.renewalStatus.hashCode() : 0);
            result = 31 * result + (this.renewPeriod != null ? this.renewPeriod.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
