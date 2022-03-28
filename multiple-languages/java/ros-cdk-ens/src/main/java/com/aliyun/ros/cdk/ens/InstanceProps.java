package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a `ALIYUN::ENS::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:02.634Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB.
     * <p>
     * If you specify with your own image, make sure the system disk size bigger than image size.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataDiskSize();

    /**
     * Property ensRegionId: ENS Region Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnsRegionId();

    /**
     * Property imageId: Image ID to create ens instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     * Property instanceType: ENS instance supported instance type, make sure it should be correct.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property period: Prepaid time period.
     * <p>
     * Unit is month, it could be from 1 to 9 or 12. Default value is 1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     * Property quantity: number of instances to create.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQuantity();

    /**
     * Property systemDiskSize: Disk size of the system disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSystemDiskSize();

    /**
     * Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: The time period of auto renew.
     * <p>
     * it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property hostName: The hostname of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     * Property instanceName: Instance name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpType() {
        return null;
    }

    /**
     * Property keyPairName: SSH key pair name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * Property password: Password of created ens instance.
     * <p>
     * Must contain at least 3 types of special character, lower character, upper character, number.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property paymentType: Payment Type.only support value Subscription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     * Property privateIpAddress: Private IP for the instance created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.
     * <p>
     * The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUniqueSuffix() {
        return null;
    }

    /**
     * Property userData: User data to pass to instance.
     * <p>
     * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     * Property vSwitchId: The vSwitch Id to create ens instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
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
        java.lang.Object dataDiskSize;
        java.lang.Object ensRegionId;
        java.lang.Object imageId;
        java.lang.Object instanceType;
        java.lang.Object period;
        java.lang.Object quantity;
        java.lang.Object systemDiskSize;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object hostName;
        java.lang.Object instanceName;
        java.lang.Object internetChargeType;
        java.lang.Object ipType;
        java.lang.Object keyPairName;
        java.lang.Object password;
        java.lang.Object paymentType;
        java.lang.Object privateIpAddress;
        java.lang.Object uniqueSuffix;
        java.lang.Object userData;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link InstanceProps#getDataDiskSize}
         * @param dataDiskSize Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. This parameter is required.
         *                     If you specify with your own image, make sure the system disk size bigger than image size.
         * @return {@code this}
         */
        public Builder dataDiskSize(java.lang.Number dataDiskSize) {
            this.dataDiskSize = dataDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDataDiskSize}
         * @param dataDiskSize Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. This parameter is required.
         *                     If you specify with your own image, make sure the system disk size bigger than image size.
         * @return {@code this}
         */
        public Builder dataDiskSize(com.aliyun.ros.cdk.core.IResolvable dataDiskSize) {
            this.dataDiskSize = dataDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: ENS Region Id. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(java.lang.String ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: ENS Region Id. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(com.aliyun.ros.cdk.core.IResolvable ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageId}
         * @param imageId Property imageId: Image ID to create ens instance. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageId}
         * @param imageId Property imageId: Image ID to create ens instance. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: ENS instance supported instance type, make sure it should be correct. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: ENS instance supported instance type, make sure it should be correct. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: Prepaid time period. This parameter is required.
         *               Unit is month, it could be from 1 to 9 or 12. Default value is 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: Prepaid time period. This parameter is required.
         *               Unit is month, it could be from 1 to 9 or 12. Default value is 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQuantity}
         * @param quantity Property quantity: number of instances to create. This parameter is required.
         * @return {@code this}
         */
        public Builder quantity(java.lang.Number quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQuantity}
         * @param quantity Property quantity: number of instances to create. This parameter is required.
         * @return {@code this}
         */
        public Builder quantity(com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk. This parameter is required.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk. This parameter is required.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getHostName}
         * @param hostName Property hostName: The hostname of the instance.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getHostName}
         * @param hostName Property hostName: The hostname of the instance.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Instance name.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Instance name.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIpType}
         * @param ipType Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
         * @return {@code this}
         */
        public Builder ipType(java.lang.String ipType) {
            this.ipType = ipType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getIpType}
         * @param ipType Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
         * @return {@code this}
         */
        public Builder ipType(com.aliyun.ros.cdk.core.IResolvable ipType) {
            this.ipType = ipType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPassword}
         * @param password Property password: Password of created ens instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPassword}
         * @param password Property password: Password of created ens instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentType}
         * @param paymentType Property paymentType: Payment Type.only support value Subscription.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentType}
         * @param paymentType Property paymentType: Payment Type.only support value Subscription.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: Private IP for the instance created.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: Private IP for the instance created.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUniqueSuffix}
         * @param uniqueSuffix Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.
         *                     The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
         * @return {@code this}
         */
        public Builder uniqueSuffix(java.lang.Boolean uniqueSuffix) {
            this.uniqueSuffix = uniqueSuffix;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUniqueSuffix}
         * @param uniqueSuffix Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.
         *                     The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
         * @return {@code this}
         */
        public Builder uniqueSuffix(com.aliyun.ros.cdk.core.IResolvable uniqueSuffix) {
            this.uniqueSuffix = uniqueSuffix;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUserData}
         * @param userData Property userData: User data to pass to instance.
         *                 [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUserData}
         * @param userData Property userData: User data to pass to instance.
         *                 [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ens instance.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ens instance.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
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
        private final java.lang.Object dataDiskSize;
        private final java.lang.Object ensRegionId;
        private final java.lang.Object imageId;
        private final java.lang.Object instanceType;
        private final java.lang.Object period;
        private final java.lang.Object quantity;
        private final java.lang.Object systemDiskSize;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object hostName;
        private final java.lang.Object instanceName;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object ipType;
        private final java.lang.Object keyPairName;
        private final java.lang.Object password;
        private final java.lang.Object paymentType;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object uniqueSuffix;
        private final java.lang.Object userData;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dataDiskSize = software.amazon.jsii.Kernel.get(this, "dataDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ensRegionId = software.amazon.jsii.Kernel.get(this, "ensRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quantity = software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipType = software.amazon.jsii.Kernel.get(this, "ipType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uniqueSuffix = software.amazon.jsii.Kernel.get(this, "uniqueSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dataDiskSize = java.util.Objects.requireNonNull(builder.dataDiskSize, "dataDiskSize is required");
            this.ensRegionId = java.util.Objects.requireNonNull(builder.ensRegionId, "ensRegionId is required");
            this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.quantity = java.util.Objects.requireNonNull(builder.quantity, "quantity is required");
            this.systemDiskSize = java.util.Objects.requireNonNull(builder.systemDiskSize, "systemDiskSize is required");
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.hostName = builder.hostName;
            this.instanceName = builder.instanceName;
            this.internetChargeType = builder.internetChargeType;
            this.ipType = builder.ipType;
            this.keyPairName = builder.keyPairName;
            this.password = builder.password;
            this.paymentType = builder.paymentType;
            this.privateIpAddress = builder.privateIpAddress;
            this.uniqueSuffix = builder.uniqueSuffix;
            this.userData = builder.userData;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getDataDiskSize() {
            return this.dataDiskSize;
        }

        @Override
        public final java.lang.Object getEnsRegionId() {
            return this.ensRegionId;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getQuantity() {
            return this.quantity;
        }

        @Override
        public final java.lang.Object getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getIpType() {
            return this.ipType;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getUniqueSuffix() {
            return this.uniqueSuffix;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dataDiskSize", om.valueToTree(this.getDataDiskSize()));
            data.set("ensRegionId", om.valueToTree(this.getEnsRegionId()));
            data.set("imageId", om.valueToTree(this.getImageId()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("quantity", om.valueToTree(this.getQuantity()));
            data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getIpType() != null) {
                data.set("ipType", om.valueToTree(this.getIpType()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getUniqueSuffix() != null) {
                data.set("uniqueSuffix", om.valueToTree(this.getUniqueSuffix()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.InstanceProps"));
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

            if (!dataDiskSize.equals(that.dataDiskSize)) return false;
            if (!ensRegionId.equals(that.ensRegionId)) return false;
            if (!imageId.equals(that.imageId)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!period.equals(that.period)) return false;
            if (!quantity.equals(that.quantity)) return false;
            if (!systemDiskSize.equals(that.systemDiskSize)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.ipType != null ? !this.ipType.equals(that.ipType) : that.ipType != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.uniqueSuffix != null ? !this.uniqueSuffix.equals(that.uniqueSuffix) : that.uniqueSuffix != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dataDiskSize.hashCode();
            result = 31 * result + (this.ensRegionId.hashCode());
            result = 31 * result + (this.imageId.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.quantity.hashCode());
            result = 31 * result + (this.systemDiskSize.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.ipType != null ? this.ipType.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.uniqueSuffix != null ? this.uniqueSuffix.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
