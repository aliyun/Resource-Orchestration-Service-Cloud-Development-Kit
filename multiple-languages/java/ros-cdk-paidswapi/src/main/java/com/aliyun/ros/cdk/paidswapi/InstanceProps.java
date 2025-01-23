package com.aliyun.ros.cdk.paidswapi;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidswapi-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.245Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidswapi.$Module.class, fqn = "@alicloud/ros-cdk-paidswapi.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property ecsSpec: The ECS specification of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsSpec();

    /**
     * Property imageUrl: The mirror address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageUrl();

    /**
     * Property instanceName: The instance name.
     * <p>
     * Format requirements:
     * <p>
     * <ul>
     * <li>Can only contain letters, numbers and underscores (_).</li>
     * <li>It cannot exceed 27 characters.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property accessibility: Whether the workspace is visible to others.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>PUBLIC</strong>: Visible to all users of the workspace.</li>
     * <li><strong>PRIVATE</strong>: Only visible to yourself and the administrator of the workspace.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessibility() {
        return null;
    }

    /**
     * Property datasets: A collection of datasets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatasets() {
        return null;
    }

    /**
     * Property environmentVariables: Environment variable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVariables() {
        return null;
    }

    /**
     * Property labels: User-defined labels.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return null;
    }

    /**
     * Property saveImage: Whether to close the instance after saving the environment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSaveImage() {
        return null;
    }

    /**
     * Property userVpc: User vpc configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserVpc() {
        return null;
    }

    /**
     * Property workspaceId: The Id of the workspace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspaceId() {
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
        java.lang.Object ecsSpec;
        java.lang.Object imageUrl;
        java.lang.Object instanceName;
        java.lang.Object accessibility;
        java.lang.Object datasets;
        java.lang.Object environmentVariables;
        java.lang.Object labels;
        java.lang.Object saveImage;
        java.lang.Object userVpc;
        java.lang.Object workspaceId;

        /**
         * Sets the value of {@link InstanceProps#getEcsSpec}
         * @param ecsSpec Property ecsSpec: The ECS specification of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsSpec(java.lang.String ecsSpec) {
            this.ecsSpec = ecsSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEcsSpec}
         * @param ecsSpec Property ecsSpec: The ECS specification of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsSpec(com.aliyun.ros.cdk.core.IResolvable ecsSpec) {
            this.ecsSpec = ecsSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageUrl}
         * @param imageUrl Property imageUrl: The mirror address. This parameter is required.
         * @return {@code this}
         */
        public Builder imageUrl(java.lang.String imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageUrl}
         * @param imageUrl Property imageUrl: The mirror address. This parameter is required.
         * @return {@code this}
         */
        public Builder imageUrl(com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.imageUrl = imageUrl;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The instance name. This parameter is required.
         *                     Format requirements:
         *                     <p>
         *                     <ul>
         *                     <li>Can only contain letters, numbers and underscores (_).</li>
         *                     <li>It cannot exceed 27 characters.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The instance name. This parameter is required.
         *                     Format requirements:
         *                     <p>
         *                     <ul>
         *                     <li>Can only contain letters, numbers and underscores (_).</li>
         *                     <li>It cannot exceed 27 characters.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAccessibility}
         * @param accessibility Property accessibility: Whether the workspace is visible to others.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li><strong>PUBLIC</strong>: Visible to all users of the workspace.</li>
         *                      <li><strong>PRIVATE</strong>: Only visible to yourself and the administrator of the workspace.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder accessibility(java.lang.String accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAccessibility}
         * @param accessibility Property accessibility: Whether the workspace is visible to others.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li><strong>PUBLIC</strong>: Visible to all users of the workspace.</li>
         *                      <li><strong>PRIVATE</strong>: Only visible to yourself and the administrator of the workspace.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder accessibility(com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDatasets}
         * @param datasets Property datasets: A collection of datasets.
         * @return {@code this}
         */
        public Builder datasets(com.aliyun.ros.cdk.core.IResolvable datasets) {
            this.datasets = datasets;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDatasets}
         * @param datasets Property datasets: A collection of datasets.
         * @return {@code this}
         */
        public Builder datasets(java.util.List<? extends java.lang.Object> datasets) {
            this.datasets = datasets;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEnvironmentVariables}
         * @param environmentVariables Property environmentVariables: Environment variable.
         * @return {@code this}
         */
        public Builder environmentVariables(com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.environmentVariables = environmentVariables;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEnvironmentVariables}
         * @param environmentVariables Property environmentVariables: Environment variable.
         * @return {@code this}
         */
        public Builder environmentVariables(java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.environmentVariables = environmentVariables;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLabels}
         * @param labels Property labels: User-defined labels.
         * @return {@code this}
         */
        public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLabels}
         * @param labels Property labels: User-defined labels.
         * @return {@code this}
         */
        public Builder labels(java.util.List<? extends java.lang.Object> labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSaveImage}
         * @param saveImage Property saveImage: Whether to close the instance after saving the environment.
         * @return {@code this}
         */
        public Builder saveImage(java.lang.Boolean saveImage) {
            this.saveImage = saveImage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSaveImage}
         * @param saveImage Property saveImage: Whether to close the instance after saving the environment.
         * @return {@code this}
         */
        public Builder saveImage(com.aliyun.ros.cdk.core.IResolvable saveImage) {
            this.saveImage = saveImage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUserVpc}
         * @param userVpc Property userVpc: User vpc configuration.
         * @return {@code this}
         */
        public Builder userVpc(com.aliyun.ros.cdk.core.IResolvable userVpc) {
            this.userVpc = userVpc;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUserVpc}
         * @param userVpc Property userVpc: User vpc configuration.
         * @return {@code this}
         */
        public Builder userVpc(com.aliyun.ros.cdk.paidswapi.RosInstance.UserVpcProperty userVpc) {
            this.userVpc = userVpc;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The Id of the workspace.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The Id of the workspace.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
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
        private final java.lang.Object ecsSpec;
        private final java.lang.Object imageUrl;
        private final java.lang.Object instanceName;
        private final java.lang.Object accessibility;
        private final java.lang.Object datasets;
        private final java.lang.Object environmentVariables;
        private final java.lang.Object labels;
        private final java.lang.Object saveImage;
        private final java.lang.Object userVpc;
        private final java.lang.Object workspaceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ecsSpec = software.amazon.jsii.Kernel.get(this, "ecsSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageUrl = software.amazon.jsii.Kernel.get(this, "imageUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessibility = software.amazon.jsii.Kernel.get(this, "accessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.datasets = software.amazon.jsii.Kernel.get(this, "datasets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentVariables = software.amazon.jsii.Kernel.get(this, "environmentVariables", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.saveImage = software.amazon.jsii.Kernel.get(this, "saveImage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userVpc = software.amazon.jsii.Kernel.get(this, "userVpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ecsSpec = java.util.Objects.requireNonNull(builder.ecsSpec, "ecsSpec is required");
            this.imageUrl = java.util.Objects.requireNonNull(builder.imageUrl, "imageUrl is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.accessibility = builder.accessibility;
            this.datasets = builder.datasets;
            this.environmentVariables = builder.environmentVariables;
            this.labels = builder.labels;
            this.saveImage = builder.saveImage;
            this.userVpc = builder.userVpc;
            this.workspaceId = builder.workspaceId;
        }

        @Override
        public final java.lang.Object getEcsSpec() {
            return this.ecsSpec;
        }

        @Override
        public final java.lang.Object getImageUrl() {
            return this.imageUrl;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getAccessibility() {
            return this.accessibility;
        }

        @Override
        public final java.lang.Object getDatasets() {
            return this.datasets;
        }

        @Override
        public final java.lang.Object getEnvironmentVariables() {
            return this.environmentVariables;
        }

        @Override
        public final java.lang.Object getLabels() {
            return this.labels;
        }

        @Override
        public final java.lang.Object getSaveImage() {
            return this.saveImage;
        }

        @Override
        public final java.lang.Object getUserVpc() {
            return this.userVpc;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ecsSpec", om.valueToTree(this.getEcsSpec()));
            data.set("imageUrl", om.valueToTree(this.getImageUrl()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            if (this.getAccessibility() != null) {
                data.set("accessibility", om.valueToTree(this.getAccessibility()));
            }
            if (this.getDatasets() != null) {
                data.set("datasets", om.valueToTree(this.getDatasets()));
            }
            if (this.getEnvironmentVariables() != null) {
                data.set("environmentVariables", om.valueToTree(this.getEnvironmentVariables()));
            }
            if (this.getLabels() != null) {
                data.set("labels", om.valueToTree(this.getLabels()));
            }
            if (this.getSaveImage() != null) {
                data.set("saveImage", om.valueToTree(this.getSaveImage()));
            }
            if (this.getUserVpc() != null) {
                data.set("userVpc", om.valueToTree(this.getUserVpc()));
            }
            if (this.getWorkspaceId() != null) {
                data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paidswapi.InstanceProps"));
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

            if (!ecsSpec.equals(that.ecsSpec)) return false;
            if (!imageUrl.equals(that.imageUrl)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (this.accessibility != null ? !this.accessibility.equals(that.accessibility) : that.accessibility != null) return false;
            if (this.datasets != null ? !this.datasets.equals(that.datasets) : that.datasets != null) return false;
            if (this.environmentVariables != null ? !this.environmentVariables.equals(that.environmentVariables) : that.environmentVariables != null) return false;
            if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
            if (this.saveImage != null ? !this.saveImage.equals(that.saveImage) : that.saveImage != null) return false;
            if (this.userVpc != null ? !this.userVpc.equals(that.userVpc) : that.userVpc != null) return false;
            return this.workspaceId != null ? this.workspaceId.equals(that.workspaceId) : that.workspaceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ecsSpec.hashCode();
            result = 31 * result + (this.imageUrl.hashCode());
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.accessibility != null ? this.accessibility.hashCode() : 0);
            result = 31 * result + (this.datasets != null ? this.datasets.hashCode() : 0);
            result = 31 * result + (this.environmentVariables != null ? this.environmentVariables.hashCode() : 0);
            result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
            result = 31 * result + (this.saveImage != null ? this.saveImage.hashCode() : 0);
            result = 31 * result + (this.userVpc != null ? this.userVpc.hashCode() : 0);
            result = 31 * result + (this.workspaceId != null ? this.workspaceId.hashCode() : 0);
            return result;
        }
    }
}
