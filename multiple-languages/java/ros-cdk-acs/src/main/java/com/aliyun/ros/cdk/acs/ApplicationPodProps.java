package com.aliyun.ros.cdk.acs;

/**
 * Properties for defining a <code>ApplicationPod</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:20.980Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.ApplicationPodProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationPodProps.Jsii$Proxy.class)
public interface ApplicationPodProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property computeClass: Compute class of the application pod.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getComputeClass();

    /**
     * Property computeQos: Compute QoS of the application pod.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getComputeQos();

    /**
     * Property cpuCoreNumber: CPU core number required by the container.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCpuCoreNumber();

    /**
     * Property image: Container image for the application pod.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImage();

    /**
     * Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKind();

    /**
     * Property memory: Memory size (in GB) required by the container.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMemory();

    /**
     * Property diskConfig: Disk configurations for the application pod.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskConfig() {
        return null;
    }

    /**
     * Property gpuCoreNumber: GPU core number, if using GPU.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGpuCoreNumber() {
        return null;
    }

    /**
     * Property gpuModelSeries: GPU model series, if using GPU.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGpuModelSeries() {
        return null;
    }

    /**
     * Property gpuType: GPU type, default is nvidia.com/gpu.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGpuType() {
        return null;
    }

    /**
     * Property replicas: Number of replicas for Deployment or StatefulSet.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReplicas() {
        return null;
    }

    /**
     * Property zoneId: Zone ID for the application pod.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplicationPodProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationPodProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationPodProps> {
        java.lang.Object computeClass;
        java.lang.Object computeQos;
        java.lang.Object cpuCoreNumber;
        java.lang.Object image;
        java.lang.Object kind;
        java.lang.Object memory;
        java.lang.Object diskConfig;
        java.lang.Object gpuCoreNumber;
        java.lang.Object gpuModelSeries;
        java.lang.Object gpuType;
        java.lang.Object replicas;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ApplicationPodProps#getComputeClass}
         * @param computeClass Property computeClass: Compute class of the application pod. This parameter is required.
         * @return {@code this}
         */
        public Builder computeClass(java.lang.String computeClass) {
            this.computeClass = computeClass;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getComputeClass}
         * @param computeClass Property computeClass: Compute class of the application pod. This parameter is required.
         * @return {@code this}
         */
        public Builder computeClass(com.aliyun.ros.cdk.core.IResolvable computeClass) {
            this.computeClass = computeClass;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getComputeQos}
         * @param computeQos Property computeQos: Compute QoS of the application pod. This parameter is required.
         * @return {@code this}
         */
        public Builder computeQos(java.lang.String computeQos) {
            this.computeQos = computeQos;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getComputeQos}
         * @param computeQos Property computeQos: Compute QoS of the application pod. This parameter is required.
         * @return {@code this}
         */
        public Builder computeQos(com.aliyun.ros.cdk.core.IResolvable computeQos) {
            this.computeQos = computeQos;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getCpuCoreNumber}
         * @param cpuCoreNumber Property cpuCoreNumber: CPU core number required by the container. This parameter is required.
         * @return {@code this}
         */
        public Builder cpuCoreNumber(java.lang.String cpuCoreNumber) {
            this.cpuCoreNumber = cpuCoreNumber;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getCpuCoreNumber}
         * @param cpuCoreNumber Property cpuCoreNumber: CPU core number required by the container. This parameter is required.
         * @return {@code this}
         */
        public Builder cpuCoreNumber(com.aliyun.ros.cdk.core.IResolvable cpuCoreNumber) {
            this.cpuCoreNumber = cpuCoreNumber;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getImage}
         * @param image Property image: Container image for the application pod. This parameter is required.
         * @return {@code this}
         */
        public Builder image(java.lang.String image) {
            this.image = image;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getImage}
         * @param image Property image: Container image for the application pod. This parameter is required.
         * @return {@code this}
         */
        public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
            this.image = image;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getKind}
         * @param kind Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet). This parameter is required.
         * @return {@code this}
         */
        public Builder kind(java.lang.String kind) {
            this.kind = kind;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getKind}
         * @param kind Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet). This parameter is required.
         * @return {@code this}
         */
        public Builder kind(com.aliyun.ros.cdk.core.IResolvable kind) {
            this.kind = kind;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getMemory}
         * @param memory Property memory: Memory size (in GB) required by the container. This parameter is required.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getMemory}
         * @param memory Property memory: Memory size (in GB) required by the container. This parameter is required.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getDiskConfig}
         * @param diskConfig Property diskConfig: Disk configurations for the application pod.
         * @return {@code this}
         */
        public Builder diskConfig(com.aliyun.ros.cdk.core.IResolvable diskConfig) {
            this.diskConfig = diskConfig;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getDiskConfig}
         * @param diskConfig Property diskConfig: Disk configurations for the application pod.
         * @return {@code this}
         */
        public Builder diskConfig(com.aliyun.ros.cdk.acs.RosApplicationPod.DiskConfigProperty diskConfig) {
            this.diskConfig = diskConfig;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getGpuCoreNumber}
         * @param gpuCoreNumber Property gpuCoreNumber: GPU core number, if using GPU.
         * @return {@code this}
         */
        public Builder gpuCoreNumber(java.lang.Number gpuCoreNumber) {
            this.gpuCoreNumber = gpuCoreNumber;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getGpuCoreNumber}
         * @param gpuCoreNumber Property gpuCoreNumber: GPU core number, if using GPU.
         * @return {@code this}
         */
        public Builder gpuCoreNumber(com.aliyun.ros.cdk.core.IResolvable gpuCoreNumber) {
            this.gpuCoreNumber = gpuCoreNumber;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getGpuModelSeries}
         * @param gpuModelSeries Property gpuModelSeries: GPU model series, if using GPU.
         * @return {@code this}
         */
        public Builder gpuModelSeries(java.lang.String gpuModelSeries) {
            this.gpuModelSeries = gpuModelSeries;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getGpuModelSeries}
         * @param gpuModelSeries Property gpuModelSeries: GPU model series, if using GPU.
         * @return {@code this}
         */
        public Builder gpuModelSeries(com.aliyun.ros.cdk.core.IResolvable gpuModelSeries) {
            this.gpuModelSeries = gpuModelSeries;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getGpuType}
         * @param gpuType Property gpuType: GPU type, default is nvidia.com/gpu.
         * @return {@code this}
         */
        public Builder gpuType(java.lang.String gpuType) {
            this.gpuType = gpuType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getGpuType}
         * @param gpuType Property gpuType: GPU type, default is nvidia.com/gpu.
         * @return {@code this}
         */
        public Builder gpuType(com.aliyun.ros.cdk.core.IResolvable gpuType) {
            this.gpuType = gpuType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getReplicas}
         * @param replicas Property replicas: Number of replicas for Deployment or StatefulSet.
         * @return {@code this}
         */
        public Builder replicas(java.lang.Number replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getReplicas}
         * @param replicas Property replicas: Number of replicas for Deployment or StatefulSet.
         * @return {@code this}
         */
        public Builder replicas(com.aliyun.ros.cdk.core.IResolvable replicas) {
            this.replicas = replicas;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getZoneId}
         * @param zoneId Property zoneId: Zone ID for the application pod.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationPodProps#getZoneId}
         * @param zoneId Property zoneId: Zone ID for the application pod.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationPodProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationPodProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationPodProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationPodProps {
        private final java.lang.Object computeClass;
        private final java.lang.Object computeQos;
        private final java.lang.Object cpuCoreNumber;
        private final java.lang.Object image;
        private final java.lang.Object kind;
        private final java.lang.Object memory;
        private final java.lang.Object diskConfig;
        private final java.lang.Object gpuCoreNumber;
        private final java.lang.Object gpuModelSeries;
        private final java.lang.Object gpuType;
        private final java.lang.Object replicas;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.computeClass = software.amazon.jsii.Kernel.get(this, "computeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeQos = software.amazon.jsii.Kernel.get(this, "computeQos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpuCoreNumber = software.amazon.jsii.Kernel.get(this, "cpuCoreNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kind = software.amazon.jsii.Kernel.get(this, "kind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskConfig = software.amazon.jsii.Kernel.get(this, "diskConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gpuCoreNumber = software.amazon.jsii.Kernel.get(this, "gpuCoreNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gpuModelSeries = software.amazon.jsii.Kernel.get(this, "gpuModelSeries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gpuType = software.amazon.jsii.Kernel.get(this, "gpuType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicas = software.amazon.jsii.Kernel.get(this, "replicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.computeClass = java.util.Objects.requireNonNull(builder.computeClass, "computeClass is required");
            this.computeQos = java.util.Objects.requireNonNull(builder.computeQos, "computeQos is required");
            this.cpuCoreNumber = java.util.Objects.requireNonNull(builder.cpuCoreNumber, "cpuCoreNumber is required");
            this.image = java.util.Objects.requireNonNull(builder.image, "image is required");
            this.kind = java.util.Objects.requireNonNull(builder.kind, "kind is required");
            this.memory = java.util.Objects.requireNonNull(builder.memory, "memory is required");
            this.diskConfig = builder.diskConfig;
            this.gpuCoreNumber = builder.gpuCoreNumber;
            this.gpuModelSeries = builder.gpuModelSeries;
            this.gpuType = builder.gpuType;
            this.replicas = builder.replicas;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getComputeClass() {
            return this.computeClass;
        }

        @Override
        public final java.lang.Object getComputeQos() {
            return this.computeQos;
        }

        @Override
        public final java.lang.Object getCpuCoreNumber() {
            return this.cpuCoreNumber;
        }

        @Override
        public final java.lang.Object getImage() {
            return this.image;
        }

        @Override
        public final java.lang.Object getKind() {
            return this.kind;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getDiskConfig() {
            return this.diskConfig;
        }

        @Override
        public final java.lang.Object getGpuCoreNumber() {
            return this.gpuCoreNumber;
        }

        @Override
        public final java.lang.Object getGpuModelSeries() {
            return this.gpuModelSeries;
        }

        @Override
        public final java.lang.Object getGpuType() {
            return this.gpuType;
        }

        @Override
        public final java.lang.Object getReplicas() {
            return this.replicas;
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

            data.set("computeClass", om.valueToTree(this.getComputeClass()));
            data.set("computeQos", om.valueToTree(this.getComputeQos()));
            data.set("cpuCoreNumber", om.valueToTree(this.getCpuCoreNumber()));
            data.set("image", om.valueToTree(this.getImage()));
            data.set("kind", om.valueToTree(this.getKind()));
            data.set("memory", om.valueToTree(this.getMemory()));
            if (this.getDiskConfig() != null) {
                data.set("diskConfig", om.valueToTree(this.getDiskConfig()));
            }
            if (this.getGpuCoreNumber() != null) {
                data.set("gpuCoreNumber", om.valueToTree(this.getGpuCoreNumber()));
            }
            if (this.getGpuModelSeries() != null) {
                data.set("gpuModelSeries", om.valueToTree(this.getGpuModelSeries()));
            }
            if (this.getGpuType() != null) {
                data.set("gpuType", om.valueToTree(this.getGpuType()));
            }
            if (this.getReplicas() != null) {
                data.set("replicas", om.valueToTree(this.getReplicas()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acs.ApplicationPodProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationPodProps.Jsii$Proxy that = (ApplicationPodProps.Jsii$Proxy) o;

            if (!computeClass.equals(that.computeClass)) return false;
            if (!computeQos.equals(that.computeQos)) return false;
            if (!cpuCoreNumber.equals(that.cpuCoreNumber)) return false;
            if (!image.equals(that.image)) return false;
            if (!kind.equals(that.kind)) return false;
            if (!memory.equals(that.memory)) return false;
            if (this.diskConfig != null ? !this.diskConfig.equals(that.diskConfig) : that.diskConfig != null) return false;
            if (this.gpuCoreNumber != null ? !this.gpuCoreNumber.equals(that.gpuCoreNumber) : that.gpuCoreNumber != null) return false;
            if (this.gpuModelSeries != null ? !this.gpuModelSeries.equals(that.gpuModelSeries) : that.gpuModelSeries != null) return false;
            if (this.gpuType != null ? !this.gpuType.equals(that.gpuType) : that.gpuType != null) return false;
            if (this.replicas != null ? !this.replicas.equals(that.replicas) : that.replicas != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.computeClass.hashCode();
            result = 31 * result + (this.computeQos.hashCode());
            result = 31 * result + (this.cpuCoreNumber.hashCode());
            result = 31 * result + (this.image.hashCode());
            result = 31 * result + (this.kind.hashCode());
            result = 31 * result + (this.memory.hashCode());
            result = 31 * result + (this.diskConfig != null ? this.diskConfig.hashCode() : 0);
            result = 31 * result + (this.gpuCoreNumber != null ? this.gpuCoreNumber.hashCode() : 0);
            result = 31 * result + (this.gpuModelSeries != null ? this.gpuModelSeries.hashCode() : 0);
            result = 31 * result + (this.gpuType != null ? this.gpuType.hashCode() : 0);
            result = 31 * result + (this.replicas != null ? this.replicas.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
