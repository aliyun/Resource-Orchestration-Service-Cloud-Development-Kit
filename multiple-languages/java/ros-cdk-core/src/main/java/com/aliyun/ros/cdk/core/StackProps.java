package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.763Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.StackProps")
@software.amazon.jsii.Jsii.Proxy(StackProps.Jsii$Proxy.class)
public interface StackProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * A description of the stack.
     * <p>
     * Default: - No description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.Boolean getEnableResourcePropertyConstraint() {
        return null;
    }

    /**
     * (experimental) The ALIYUN environment (account/region) where this stack will be deployed.
     * <p>
     * Set the <code>region</code>/<code>account</code> fields of <code>env</code> to either a concrete value to
     * select the indicated environment (recommended for production stacks), or to
     * the values of environment variables
     * <code>CDK_DEFAULT_REGION</code>/<code>CDK_DEFAULT_ACCOUNT</code> to let the target environment
     * depend on the ALIYUN credentials/configuration that the CDK CLI is executed
     * under (recommended for development stacks).
     * <p>
     * If the <code>Stack</code> is instantiated inside a <code>Stage</code>, any undefined
     * <code>region</code>/<code>account</code> fields from <code>env</code> will default to the same field on the
     * encompassing <code>Stage</code>, if configured there.
     * <p>
     * If either <code>region</code> or <code>account</code> are not set nor inherited from <code>Stage</code>, the
     * Stack will be considered "<em>environment-agnostic</em>"". Environment-agnostic
     * stacks can be deployed to any environment but may not be able to take
     * advantage of all features of the CDK.
     * <p>
     * Default: - The environment of the containing `Stage` if available,
     * otherwise create the stack will be environment-agnostic.
     * <p>
     * Example:
     * <p>
     * <blockquote><pre>
     * // Use a concrete account and region to deploy this stack to:
     * // `.account` and `.region` will simply return these values.
     * new Stack(app, 'Stack1', {
     *   env: {
     *     account: '123456789012',
     *     region: 'cn-hangzhou'
     *   },
     * });
     * // Use the CLI's current credentials to determine the target environment:
     * // `.account` and `.region` will reflect the account+region the CLI
     * // is configured to use (based on the user CLI credentials)
     * new Stack(app, 'Stack2', {
     *   env: {
     *     account: process.env.CDK_DEFAULT_ACCOUNT,
     *     region: process.env.CDK_DEFAULT_REGION
     *   },
     * });
     * // Define multiple stacks stage associated with an environment
     * const myStage = new Stage(app, 'MyStage', {
     *   env: {
     *     account: '123456789012',
     *     region: 'cn-hangzhou'
     *   }
     * });
     * // both of these stacks will use the stage's account/region:
     * // `.account` and `.region` will resolve to the concrete values as above
     * new MyStack(myStage, 'Stack1');
     * new YourStack(myStage, 'Stack2');
     * // Define an environment-agnostic stack:
     * // `.account` and `.region` will resolve to `{ "Ref": "ALIYUN::AccountId" }` and `{ "Ref": "ALIYUN::Region" }` respectively.
     * // which will only resolve to actual values by ROS during deployment.
     * new MyStack(app, 'Stack1');
     * </pre></blockquote>
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Environment getEnv() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getMetadata() {
        return null;
    }

    /**
     * Name to deploy the stack with.
     * <p>
     * Default: - Derived from construct path.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getStackName() {
        return null;
    }

    /**
     * Synthesis method to use while deploying this stack.
     * <p>
     * Default: - `DefaultStackSynthesizer`
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IStackSynthesizer getSynthesizer() {
        return null;
    }

    /**
     * Stack tags that will be applied to all the taggable resources and the stack itself.
     * <p>
     * Default: {}
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.String> getTags() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable java.lang.String getVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link StackProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link StackProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<StackProps> {
        java.lang.String description;
        java.lang.Boolean enableResourcePropertyConstraint;
        com.aliyun.ros.cdk.core.Environment env;
        java.util.Map<java.lang.String, java.lang.Object> metadata;
        java.lang.String stackName;
        com.aliyun.ros.cdk.core.IStackSynthesizer synthesizer;
        java.util.Map<java.lang.String, java.lang.String> tags;
        java.lang.String version;

        /**
         * Sets the value of {@link StackProps#getDescription}
         * @param description A description of the stack.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getEnableResourcePropertyConstraint}
         * @param enableResourcePropertyConstraint the value to be set.
         * @return {@code this}
         */
        public Builder enableResourcePropertyConstraint(java.lang.Boolean enableResourcePropertyConstraint) {
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getEnv}
         * @param env The ALIYUN environment (account/region) where this stack will be deployed.
         *            Set the <code>region</code>/<code>account</code> fields of <code>env</code> to either a concrete value to
         *            select the indicated environment (recommended for production stacks), or to
         *            the values of environment variables
         *            <code>CDK_DEFAULT_REGION</code>/<code>CDK_DEFAULT_ACCOUNT</code> to let the target environment
         *            depend on the ALIYUN credentials/configuration that the CDK CLI is executed
         *            under (recommended for development stacks).
         *            <p>
         *            If the <code>Stack</code> is instantiated inside a <code>Stage</code>, any undefined
         *            <code>region</code>/<code>account</code> fields from <code>env</code> will default to the same field on the
         *            encompassing <code>Stage</code>, if configured there.
         *            <p>
         *            If either <code>region</code> or <code>account</code> are not set nor inherited from <code>Stage</code>, the
         *            Stack will be considered "<em>environment-agnostic</em>"". Environment-agnostic
         *            stacks can be deployed to any environment but may not be able to take
         *            advantage of all features of the CDK.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
        public Builder env(com.aliyun.ros.cdk.core.Environment env) {
            this.env = env;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getMetadata}
         * @param metadata the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder metadata(java.util.Map<java.lang.String, ? extends java.lang.Object> metadata) {
            this.metadata = (java.util.Map<java.lang.String, java.lang.Object>)metadata;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getStackName}
         * @param stackName Name to deploy the stack with.
         * @return {@code this}
         */
        public Builder stackName(java.lang.String stackName) {
            this.stackName = stackName;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getSynthesizer}
         * @param synthesizer Synthesis method to use while deploying this stack.
         * @return {@code this}
         */
        public Builder synthesizer(com.aliyun.ros.cdk.core.IStackSynthesizer synthesizer) {
            this.synthesizer = synthesizer;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getTags}
         * @param tags Stack tags that will be applied to all the taggable resources and the stack itself.
         * @return {@code this}
         */
        public Builder tags(java.util.Map<java.lang.String, java.lang.String> tags) {
            this.tags = tags;
            return this;
        }

        /**
         * Sets the value of {@link StackProps#getVersion}
         * @param version the value to be set.
         * @return {@code this}
         */
        public Builder version(java.lang.String version) {
            this.version = version;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link StackProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public StackProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link StackProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements StackProps {
        private final java.lang.String description;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.core.Environment env;
        private final java.util.Map<java.lang.String, java.lang.Object> metadata;
        private final java.lang.String stackName;
        private final com.aliyun.ros.cdk.core.IStackSynthesizer synthesizer;
        private final java.util.Map<java.lang.String, java.lang.String> tags;
        private final java.lang.String version;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.enableResourcePropertyConstraint = software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.env = software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Environment.class));
            this.metadata = software.amazon.jsii.Kernel.get(this, "metadata", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.stackName = software.amazon.jsii.Kernel.get(this, "stackName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.synthesizer = software.amazon.jsii.Kernel.get(this, "synthesizer", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IStackSynthesizer.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.enableResourcePropertyConstraint = builder.enableResourcePropertyConstraint;
            this.env = builder.env;
            this.metadata = (java.util.Map<java.lang.String, java.lang.Object>)builder.metadata;
            this.stackName = builder.stackName;
            this.synthesizer = builder.synthesizer;
            this.tags = builder.tags;
            this.version = builder.version;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Boolean getEnableResourcePropertyConstraint() {
            return this.enableResourcePropertyConstraint;
        }

        @Override
        public final com.aliyun.ros.cdk.core.Environment getEnv() {
            return this.env;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getMetadata() {
            return this.metadata;
        }

        @Override
        public final java.lang.String getStackName() {
            return this.stackName;
        }

        @Override
        public final com.aliyun.ros.cdk.core.IStackSynthesizer getSynthesizer() {
            return this.synthesizer;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.String> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.String getVersion() {
            return this.version;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableResourcePropertyConstraint() != null) {
                data.set("enableResourcePropertyConstraint", om.valueToTree(this.getEnableResourcePropertyConstraint()));
            }
            if (this.getEnv() != null) {
                data.set("env", om.valueToTree(this.getEnv()));
            }
            if (this.getMetadata() != null) {
                data.set("metadata", om.valueToTree(this.getMetadata()));
            }
            if (this.getStackName() != null) {
                data.set("stackName", om.valueToTree(this.getStackName()));
            }
            if (this.getSynthesizer() != null) {
                data.set("synthesizer", om.valueToTree(this.getSynthesizer()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVersion() != null) {
                data.set("version", om.valueToTree(this.getVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.StackProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            StackProps.Jsii$Proxy that = (StackProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableResourcePropertyConstraint != null ? !this.enableResourcePropertyConstraint.equals(that.enableResourcePropertyConstraint) : that.enableResourcePropertyConstraint != null) return false;
            if (this.env != null ? !this.env.equals(that.env) : that.env != null) return false;
            if (this.metadata != null ? !this.metadata.equals(that.metadata) : that.metadata != null) return false;
            if (this.stackName != null ? !this.stackName.equals(that.stackName) : that.stackName != null) return false;
            if (this.synthesizer != null ? !this.synthesizer.equals(that.synthesizer) : that.synthesizer != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.version != null ? this.version.equals(that.version) : that.version == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.enableResourcePropertyConstraint != null ? this.enableResourcePropertyConstraint.hashCode() : 0);
            result = 31 * result + (this.env != null ? this.env.hashCode() : 0);
            result = 31 * result + (this.metadata != null ? this.metadata.hashCode() : 0);
            result = 31 * result + (this.stackName != null ? this.stackName.hashCode() : 0);
            result = 31 * result + (this.synthesizer != null ? this.synthesizer.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
            return result;
        }
    }
}
