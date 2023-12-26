package com.aliyun.ros.cdk.searchengine;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-searchengine-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:18.016Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.searchengine.$Module.class, fqn = "@alicloud/ros-cdk-searchengine.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property chargeType: The billing method.
     * <p>
     * Valid values: POSTPAY.
     * POSTPAY: pay-as-you-go.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChargeType();

    /**
     * Property password: The password of instance.
     * <p>
     * It consists of lowercase letters and numbers, and the length is 6-8 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     * Property qrsNum: The number of query nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQrsNum();

    /**
     * Property qrsSpec: The specification of query nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQrsSpec();

    /**
     * Property searcherDocSize: The storage size of single data node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSearcherDocSize();

    /**
     * Property searcherNum: The number of data nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSearcherNum();

    /**
     * Property searcherSpec: The specification of data nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSearcherSpec();

    /**
     * Property userName: The user name of instance.
     * <p>
     * Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

    /**
     * Property vpcId: The ID of VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: The ID of vSwitch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

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
        java.lang.Object chargeType;
        java.lang.Object password;
        java.lang.Object qrsNum;
        java.lang.Object qrsSpec;
        java.lang.Object searcherDocSize;
        java.lang.Object searcherNum;
        java.lang.Object searcherSpec;
        java.lang.Object userName;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link InstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         *                   Valid values: POSTPAY.
         *                   POSTPAY: pay-as-you-go.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getChargeType}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         *                   Valid values: POSTPAY.
         *                   POSTPAY: pay-as-you-go.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPassword}
         * @param password Property password: The password of instance. This parameter is required.
         *                 It consists of lowercase letters and numbers, and the length is 6-8 characters.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPassword}
         * @param password Property password: The password of instance. This parameter is required.
         *                 It consists of lowercase letters and numbers, and the length is 6-8 characters.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQrsNum}
         * @param qrsNum Property qrsNum: The number of query nodes. This parameter is required.
         * @return {@code this}
         */
        public Builder qrsNum(java.lang.Number qrsNum) {
            this.qrsNum = qrsNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQrsNum}
         * @param qrsNum Property qrsNum: The number of query nodes. This parameter is required.
         * @return {@code this}
         */
        public Builder qrsNum(com.aliyun.ros.cdk.core.IResolvable qrsNum) {
            this.qrsNum = qrsNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQrsSpec}
         * @param qrsSpec Property qrsSpec: The specification of query nodes. This parameter is required.
         * @return {@code this}
         */
        public Builder qrsSpec(java.lang.String qrsSpec) {
            this.qrsSpec = qrsSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQrsSpec}
         * @param qrsSpec Property qrsSpec: The specification of query nodes. This parameter is required.
         * @return {@code this}
         */
        public Builder qrsSpec(com.aliyun.ros.cdk.core.IResolvable qrsSpec) {
            this.qrsSpec = qrsSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSearcherDocSize}
         * @param searcherDocSize Property searcherDocSize: The storage size of single data node. This parameter is required.
         * @return {@code this}
         */
        public Builder searcherDocSize(java.lang.Number searcherDocSize) {
            this.searcherDocSize = searcherDocSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSearcherDocSize}
         * @param searcherDocSize Property searcherDocSize: The storage size of single data node. This parameter is required.
         * @return {@code this}
         */
        public Builder searcherDocSize(com.aliyun.ros.cdk.core.IResolvable searcherDocSize) {
            this.searcherDocSize = searcherDocSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSearcherNum}
         * @param searcherNum Property searcherNum: The number of data nodes. This parameter is required.
         * @return {@code this}
         */
        public Builder searcherNum(java.lang.Number searcherNum) {
            this.searcherNum = searcherNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSearcherNum}
         * @param searcherNum Property searcherNum: The number of data nodes. This parameter is required.
         * @return {@code this}
         */
        public Builder searcherNum(com.aliyun.ros.cdk.core.IResolvable searcherNum) {
            this.searcherNum = searcherNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSearcherSpec}
         * @param searcherSpec Property searcherSpec: The specification of data nodes. This parameter is required.
         * @return {@code this}
         */
        public Builder searcherSpec(java.lang.String searcherSpec) {
            this.searcherSpec = searcherSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSearcherSpec}
         * @param searcherSpec Property searcherSpec: The specification of data nodes. This parameter is required.
         * @return {@code this}
         */
        public Builder searcherSpec(com.aliyun.ros.cdk.core.IResolvable searcherSpec) {
            this.searcherSpec = searcherSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUserName}
         * @param userName Property userName: The user name of instance. This parameter is required.
         *                 Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUserName}
         * @param userName Property userName: The user name of instance. This parameter is required.
         *                 Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of vSwitch. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of vSwitch. This parameter is required.
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
        private final java.lang.Object chargeType;
        private final java.lang.Object password;
        private final java.lang.Object qrsNum;
        private final java.lang.Object qrsSpec;
        private final java.lang.Object searcherDocSize;
        private final java.lang.Object searcherNum;
        private final java.lang.Object searcherSpec;
        private final java.lang.Object userName;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qrsNum = software.amazon.jsii.Kernel.get(this, "qrsNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qrsSpec = software.amazon.jsii.Kernel.get(this, "qrsSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.searcherDocSize = software.amazon.jsii.Kernel.get(this, "searcherDocSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.searcherNum = software.amazon.jsii.Kernel.get(this, "searcherNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.searcherSpec = software.amazon.jsii.Kernel.get(this, "searcherSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chargeType = java.util.Objects.requireNonNull(builder.chargeType, "chargeType is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.qrsNum = java.util.Objects.requireNonNull(builder.qrsNum, "qrsNum is required");
            this.qrsSpec = java.util.Objects.requireNonNull(builder.qrsSpec, "qrsSpec is required");
            this.searcherDocSize = java.util.Objects.requireNonNull(builder.searcherDocSize, "searcherDocSize is required");
            this.searcherNum = java.util.Objects.requireNonNull(builder.searcherNum, "searcherNum is required");
            this.searcherSpec = java.util.Objects.requireNonNull(builder.searcherSpec, "searcherSpec is required");
            this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getQrsNum() {
            return this.qrsNum;
        }

        @Override
        public final java.lang.Object getQrsSpec() {
            return this.qrsSpec;
        }

        @Override
        public final java.lang.Object getSearcherDocSize() {
            return this.searcherDocSize;
        }

        @Override
        public final java.lang.Object getSearcherNum() {
            return this.searcherNum;
        }

        @Override
        public final java.lang.Object getSearcherSpec() {
            return this.searcherSpec;
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chargeType", om.valueToTree(this.getChargeType()));
            data.set("password", om.valueToTree(this.getPassword()));
            data.set("qrsNum", om.valueToTree(this.getQrsNum()));
            data.set("qrsSpec", om.valueToTree(this.getQrsSpec()));
            data.set("searcherDocSize", om.valueToTree(this.getSearcherDocSize()));
            data.set("searcherNum", om.valueToTree(this.getSearcherNum()));
            data.set("searcherSpec", om.valueToTree(this.getSearcherSpec()));
            data.set("userName", om.valueToTree(this.getUserName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-searchengine.InstanceProps"));
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

            if (!chargeType.equals(that.chargeType)) return false;
            if (!password.equals(that.password)) return false;
            if (!qrsNum.equals(that.qrsNum)) return false;
            if (!qrsSpec.equals(that.qrsSpec)) return false;
            if (!searcherDocSize.equals(that.searcherDocSize)) return false;
            if (!searcherNum.equals(that.searcherNum)) return false;
            if (!searcherSpec.equals(that.searcherSpec)) return false;
            if (!userName.equals(that.userName)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            return this.vSwitchId.equals(that.vSwitchId);
        }

        @Override
        public final int hashCode() {
            int result = this.chargeType.hashCode();
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.qrsNum.hashCode());
            result = 31 * result + (this.qrsSpec.hashCode());
            result = 31 * result + (this.searcherDocSize.hashCode());
            result = 31 * result + (this.searcherNum.hashCode());
            result = 31 * result + (this.searcherSpec.hashCode());
            result = 31 * result + (this.userName.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            return result;
        }
    }
}
