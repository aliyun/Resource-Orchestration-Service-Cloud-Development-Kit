package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Deployment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.393Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.Deployment")
public class Deployment extends com.aliyun.ros.cdk.core.Resource {

    protected Deployment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Deployment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ApiGateway::Deployment`.
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
    public Deployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.DeploymentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ApiGateway::Deployment`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Deployment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.DeploymentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.Deployment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.Deployment> {
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
        private final com.aliyun.ros.cdk.apigateway.DeploymentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.DeploymentProps.Builder();
        }

        /**
         * Property apiId: The id of the API.
         * <p>
         * @return {@code this}
         * @param apiId Property apiId: The id of the API. This parameter is required.
         */
        public Builder apiId(final java.lang.String apiId) {
            this.props.apiId(apiId);
            return this;
        }
        /**
         * Property apiId: The id of the API.
         * <p>
         * @return {@code this}
         * @param apiId Property apiId: The id of the API. This parameter is required.
         */
        public Builder apiId(final com.aliyun.ros.cdk.core.IResolvable apiId) {
            this.props.apiId(apiId);
            return this;
        }

        /**
         * Property groupId: The id of the Group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The id of the Group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property stageName: Bind traffic in this stage.
         * <p>
         * @return {@code this}
         * @param stageName Property stageName: Bind traffic in this stage. This parameter is required.
         */
        public Builder stageName(final java.lang.String stageName) {
            this.props.stageName(stageName);
            return this;
        }
        /**
         * Property stageName: Bind traffic in this stage.
         * <p>
         * @return {@code this}
         * @param stageName Property stageName: Bind traffic in this stage. This parameter is required.
         */
        public Builder stageName(final com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.props.stageName(stageName);
            return this;
        }

        /**
         * Property description: Description of the deployment, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the deployment, less than 180 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the deployment, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the deployment, less than 180 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property historyVersion: The history version.
         * <p>
         * @return {@code this}
         * @param historyVersion Property historyVersion: The history version. This parameter is required.
         */
        public Builder historyVersion(final java.lang.String historyVersion) {
            this.props.historyVersion(historyVersion);
            return this;
        }
        /**
         * Property historyVersion: The history version.
         * <p>
         * @return {@code this}
         * @param historyVersion Property historyVersion: The history version. This parameter is required.
         */
        public Builder historyVersion(final com.aliyun.ros.cdk.core.IResolvable historyVersion) {
            this.props.historyVersion(historyVersion);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.Deployment}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.Deployment build() {
            return new com.aliyun.ros.cdk.apigateway.Deployment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
