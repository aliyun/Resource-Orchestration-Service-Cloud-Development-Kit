package com.aliyun.ros.cdk.ehpc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::EHPC::Nodes</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.106Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.datasource.Nodes")
public class Nodes extends com.aliyun.ros.cdk.core.Resource {

    protected Nodes(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Nodes(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::EHPC::Nodes</code>.
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
    public Nodes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.datasource.NodesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::EHPC::Nodes</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Nodes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.datasource.NodesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NodeIds: The list of node IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodeIds() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Nodes: The list of nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodes() {
        return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.datasource.Nodes}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.datasource.Nodes> {
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
        private final com.aliyun.ros.cdk.ehpc.datasource.NodesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.datasource.NodesProps.Builder();
        }

        /**
         * Property clusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property hostName: The name of the node.
         * <p>
         * You can perform a fuzzy search. MySQL regular expressions are supported.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: The name of the node. This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * Property hostName: The name of the node.
         * <p>
         * You can perform a fuzzy search. MySQL regular expressions are supported.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: The name of the node. This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * Property hostNamePrefix: The prefix of the hostname.
         * <p>
         * You can query nodes that have a specified prefix.
         * <p>
         * @return {@code this}
         * @param hostNamePrefix Property hostNamePrefix: The prefix of the hostname. This parameter is required.
         */
        public Builder hostNamePrefix(final java.lang.String hostNamePrefix) {
            this.props.hostNamePrefix(hostNamePrefix);
            return this;
        }
        /**
         * Property hostNamePrefix: The prefix of the hostname.
         * <p>
         * You can query nodes that have a specified prefix.
         * <p>
         * @return {@code this}
         * @param hostNamePrefix Property hostNamePrefix: The prefix of the hostname. This parameter is required.
         */
        public Builder hostNamePrefix(final com.aliyun.ros.cdk.core.IResolvable hostNamePrefix) {
            this.props.hostNamePrefix(hostNamePrefix);
            return this;
        }

        /**
         * Property hostNameSuffix: The suffix of the hostname.
         * <p>
         * You can query nodes that have a specified suffix.
         * <p>
         * @return {@code this}
         * @param hostNameSuffix Property hostNameSuffix: The suffix of the hostname. This parameter is required.
         */
        public Builder hostNameSuffix(final java.lang.String hostNameSuffix) {
            this.props.hostNameSuffix(hostNameSuffix);
            return this;
        }
        /**
         * Property hostNameSuffix: The suffix of the hostname.
         * <p>
         * You can query nodes that have a specified suffix.
         * <p>
         * @return {@code this}
         * @param hostNameSuffix Property hostNameSuffix: The suffix of the hostname. This parameter is required.
         */
        public Builder hostNameSuffix(final com.aliyun.ros.cdk.core.IResolvable hostNameSuffix) {
            this.props.hostNameSuffix(hostNameSuffix);
            return this;
        }

        /**
         * Property privateIpAddress: The private IP address of the node.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the node. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: The private IP address of the node.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The private IP address of the node. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * Property role: The type of the node.
         * <p>
         * Valid values:
         * Manager: management node
         * Login: logon node
         * Compute: compute node
         * <p>
         * @return {@code this}
         * @param role Property role: The type of the node. This parameter is required.
         */
        public Builder role(final java.lang.String role) {
            this.props.role(role);
            return this;
        }
        /**
         * Property role: The type of the node.
         * <p>
         * Valid values:
         * Manager: management node
         * Login: logon node
         * Compute: compute node
         * <p>
         * @return {@code this}
         * @param role Property role: The type of the node. This parameter is required.
         */
        public Builder role(final com.aliyun.ros.cdk.core.IResolvable role) {
            this.props.role(role);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ehpc.datasource.Nodes}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.datasource.Nodes build() {
            return new com.aliyun.ros.cdk.ehpc.datasource.Nodes(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
