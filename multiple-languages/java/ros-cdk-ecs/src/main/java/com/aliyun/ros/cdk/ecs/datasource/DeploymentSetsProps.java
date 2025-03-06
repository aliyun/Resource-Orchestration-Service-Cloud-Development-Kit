package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DeploymentSets</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.460Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DeploymentSetsProps")
@software.amazon.jsii.Jsii.Proxy(DeploymentSetsProps.Jsii$Proxy.class)
public interface DeploymentSetsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property deploymentSetIds: he IDs of deployment sets.
     * <p>
     * The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetIds() {
        return null;
    }

    /**
     * Property deploymentSetName: The name of the deployment set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetName() {
        return null;
    }

    /**
     * Property domain: The deployment domain.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomain() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property strategy: The deployment strategy.
     * <p>
     * Valid values:
     * Availability: high availability strategy.
     * AvailabilityGroup: high availability group strategy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStrategy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DeploymentSetsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DeploymentSetsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DeploymentSetsProps> {
        java.lang.Object deploymentSetIds;
        java.lang.Object deploymentSetName;
        java.lang.Object domain;
        java.lang.Object refreshOptions;
        java.lang.Object strategy;

        /**
         * Sets the value of {@link DeploymentSetsProps#getDeploymentSetIds}
         * @param deploymentSetIds Property deploymentSetIds: he IDs of deployment sets.
         *                         The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
         * @return {@code this}
         */
        public Builder deploymentSetIds(java.util.List<? extends java.lang.Object> deploymentSetIds) {
            this.deploymentSetIds = deploymentSetIds;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getDeploymentSetIds}
         * @param deploymentSetIds Property deploymentSetIds: he IDs of deployment sets.
         *                         The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
         * @return {@code this}
         */
        public Builder deploymentSetIds(com.aliyun.ros.cdk.core.IResolvable deploymentSetIds) {
            this.deploymentSetIds = deploymentSetIds;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getDeploymentSetName}
         * @param deploymentSetName Property deploymentSetName: The name of the deployment set.
         * @return {@code this}
         */
        public Builder deploymentSetName(java.lang.String deploymentSetName) {
            this.deploymentSetName = deploymentSetName;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getDeploymentSetName}
         * @param deploymentSetName Property deploymentSetName: The name of the deployment set.
         * @return {@code this}
         */
        public Builder deploymentSetName(com.aliyun.ros.cdk.core.IResolvable deploymentSetName) {
            this.deploymentSetName = deploymentSetName;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getDomain}
         * @param domain Property domain: The deployment domain.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getDomain}
         * @param domain Property domain: The deployment domain.
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getStrategy}
         * @param strategy Property strategy: The deployment strategy.
         *                 Valid values:
         *                 Availability: high availability strategy.
         *                 AvailabilityGroup: high availability group strategy.
         * @return {@code this}
         */
        public Builder strategy(java.lang.String strategy) {
            this.strategy = strategy;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentSetsProps#getStrategy}
         * @param strategy Property strategy: The deployment strategy.
         *                 Valid values:
         *                 Availability: high availability strategy.
         *                 AvailabilityGroup: high availability group strategy.
         * @return {@code this}
         */
        public Builder strategy(com.aliyun.ros.cdk.core.IResolvable strategy) {
            this.strategy = strategy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeploymentSetsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeploymentSetsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DeploymentSetsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeploymentSetsProps {
        private final java.lang.Object deploymentSetIds;
        private final java.lang.Object deploymentSetName;
        private final java.lang.Object domain;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object strategy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deploymentSetIds = software.amazon.jsii.Kernel.get(this, "deploymentSetIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetName = software.amazon.jsii.Kernel.get(this, "deploymentSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.strategy = software.amazon.jsii.Kernel.get(this, "strategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deploymentSetIds = builder.deploymentSetIds;
            this.deploymentSetName = builder.deploymentSetName;
            this.domain = builder.domain;
            this.refreshOptions = builder.refreshOptions;
            this.strategy = builder.strategy;
        }

        @Override
        public final java.lang.Object getDeploymentSetIds() {
            return this.deploymentSetIds;
        }

        @Override
        public final java.lang.Object getDeploymentSetName() {
            return this.deploymentSetName;
        }

        @Override
        public final java.lang.Object getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getStrategy() {
            return this.strategy;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDeploymentSetIds() != null) {
                data.set("deploymentSetIds", om.valueToTree(this.getDeploymentSetIds()));
            }
            if (this.getDeploymentSetName() != null) {
                data.set("deploymentSetName", om.valueToTree(this.getDeploymentSetName()));
            }
            if (this.getDomain() != null) {
                data.set("domain", om.valueToTree(this.getDomain()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getStrategy() != null) {
                data.set("strategy", om.valueToTree(this.getStrategy()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.DeploymentSetsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DeploymentSetsProps.Jsii$Proxy that = (DeploymentSetsProps.Jsii$Proxy) o;

            if (this.deploymentSetIds != null ? !this.deploymentSetIds.equals(that.deploymentSetIds) : that.deploymentSetIds != null) return false;
            if (this.deploymentSetName != null ? !this.deploymentSetName.equals(that.deploymentSetName) : that.deploymentSetName != null) return false;
            if (this.domain != null ? !this.domain.equals(that.domain) : that.domain != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.strategy != null ? this.strategy.equals(that.strategy) : that.strategy == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deploymentSetIds != null ? this.deploymentSetIds.hashCode() : 0;
            result = 31 * result + (this.deploymentSetName != null ? this.deploymentSetName.hashCode() : 0);
            result = 31 * result + (this.domain != null ? this.domain.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.strategy != null ? this.strategy.hashCode() : 0);
            return result;
        }
    }
}
