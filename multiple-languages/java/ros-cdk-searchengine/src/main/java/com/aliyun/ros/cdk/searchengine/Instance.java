package com.aliyun.ros.cdk.searchengine;

/**
 * A ROS resource type:  `ALIYUN::SearchEngine::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.500Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.searchengine.$Module.class, fqn = "@alicloud/ros-cdk-searchengine.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SearchEngine::Instance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.searchengine.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SearchEngine::Instance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.searchengine.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Endpoint: The endpoint of instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.searchengine.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.searchengine.Instance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.searchengine.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.searchengine.InstanceProps.Builder();
        }

        /**
         * Property chargeType: The billing method.
         * <p>
         * Valid values: POSTPAY.
         * POSTPAY: pay-as-you-go.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method.
         * <p>
         * Valid values: POSTPAY.
         * POSTPAY: pay-as-you-go.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property password: The password of instance.
         * <p>
         * It consists of lowercase letters and numbers, and the length is 6-8 characters.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of instance. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The password of instance.
         * <p>
         * It consists of lowercase letters and numbers, and the length is 6-8 characters.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of instance. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property qrsNum: The number of query nodes.
         * <p>
         * @return {@code this}
         * @param qrsNum Property qrsNum: The number of query nodes. This parameter is required.
         */
        public Builder qrsNum(final java.lang.Number qrsNum) {
            this.props.qrsNum(qrsNum);
            return this;
        }
        /**
         * Property qrsNum: The number of query nodes.
         * <p>
         * @return {@code this}
         * @param qrsNum Property qrsNum: The number of query nodes. This parameter is required.
         */
        public Builder qrsNum(final com.aliyun.ros.cdk.core.IResolvable qrsNum) {
            this.props.qrsNum(qrsNum);
            return this;
        }

        /**
         * Property qrsSpec: The specification of query nodes.
         * <p>
         * @return {@code this}
         * @param qrsSpec Property qrsSpec: The specification of query nodes. This parameter is required.
         */
        public Builder qrsSpec(final java.lang.String qrsSpec) {
            this.props.qrsSpec(qrsSpec);
            return this;
        }
        /**
         * Property qrsSpec: The specification of query nodes.
         * <p>
         * @return {@code this}
         * @param qrsSpec Property qrsSpec: The specification of query nodes. This parameter is required.
         */
        public Builder qrsSpec(final com.aliyun.ros.cdk.core.IResolvable qrsSpec) {
            this.props.qrsSpec(qrsSpec);
            return this;
        }

        /**
         * Property searcherDocSize: The storage size of single data node.
         * <p>
         * @return {@code this}
         * @param searcherDocSize Property searcherDocSize: The storage size of single data node. This parameter is required.
         */
        public Builder searcherDocSize(final java.lang.Number searcherDocSize) {
            this.props.searcherDocSize(searcherDocSize);
            return this;
        }
        /**
         * Property searcherDocSize: The storage size of single data node.
         * <p>
         * @return {@code this}
         * @param searcherDocSize Property searcherDocSize: The storage size of single data node. This parameter is required.
         */
        public Builder searcherDocSize(final com.aliyun.ros.cdk.core.IResolvable searcherDocSize) {
            this.props.searcherDocSize(searcherDocSize);
            return this;
        }

        /**
         * Property searcherNum: The number of data nodes.
         * <p>
         * @return {@code this}
         * @param searcherNum Property searcherNum: The number of data nodes. This parameter is required.
         */
        public Builder searcherNum(final java.lang.Number searcherNum) {
            this.props.searcherNum(searcherNum);
            return this;
        }
        /**
         * Property searcherNum: The number of data nodes.
         * <p>
         * @return {@code this}
         * @param searcherNum Property searcherNum: The number of data nodes. This parameter is required.
         */
        public Builder searcherNum(final com.aliyun.ros.cdk.core.IResolvable searcherNum) {
            this.props.searcherNum(searcherNum);
            return this;
        }

        /**
         * Property searcherSpec: The specification of data nodes.
         * <p>
         * @return {@code this}
         * @param searcherSpec Property searcherSpec: The specification of data nodes. This parameter is required.
         */
        public Builder searcherSpec(final java.lang.String searcherSpec) {
            this.props.searcherSpec(searcherSpec);
            return this;
        }
        /**
         * Property searcherSpec: The specification of data nodes.
         * <p>
         * @return {@code this}
         * @param searcherSpec Property searcherSpec: The specification of data nodes. This parameter is required.
         */
        public Builder searcherSpec(final com.aliyun.ros.cdk.core.IResolvable searcherSpec) {
            this.props.searcherSpec(searcherSpec);
            return this;
        }

        /**
         * Property userName: The user name of instance.
         * <p>
         * Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The user name of instance. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props.userName(userName);
            return this;
        }
        /**
         * Property userName: The user name of instance.
         * <p>
         * Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The user name of instance. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props.userName(userName);
            return this;
        }

        /**
         * Property vpcId: The ID of VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.searchengine.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.searchengine.Instance build() {
            return new com.aliyun.ros.cdk.searchengine.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
