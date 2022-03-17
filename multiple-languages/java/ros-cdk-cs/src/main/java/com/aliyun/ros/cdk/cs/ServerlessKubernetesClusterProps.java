package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a `ALIYUN::CS::ServerlessKubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:14.885Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ServerlessKubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(ServerlessKubernetesClusterProps.Jsii$Proxy.class)
public interface ServerlessKubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the cluster.
     * <p>
     * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property addons: The add-ons to be installed for the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return null;
    }

    /**
     * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
     * <p>
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointPublicAccess() {
        return null;
    }

    /**
     * Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKubernetesVersion() {
        return null;
    }

    /**
     * Property natGateway: Whether to create a NAT gateway.
     * <p>
     * The value can be true or false. If not set, the system defaults to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatGateway() {
        return null;
    }

    /**
     * Property privateZone: Whether to enable PrivateZone for service discovery.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateZone() {
        return null;
    }

    /**
     * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
     * <p>
     * When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceCidr() {
        return null;
    }

    /**
     * Property tags: Tag the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosServerlessKubernetesCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: VPC ID.
     * <p>
     * If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property vSwitchIds: The IDs of VSwitches.
     * <p>
     * If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return null;
    }

    /**
     * Property zoneId: The zone ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServerlessKubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServerlessKubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServerlessKubernetesClusterProps> {
        java.lang.Object name;
        java.lang.Object addons;
        java.lang.Object endpointPublicAccess;
        java.lang.Object kubernetesVersion;
        java.lang.Object natGateway;
        java.lang.Object privateZone;
        java.lang.Object securityGroupId;
        java.lang.Object serviceCidr;
        java.util.List<com.aliyun.ros.cdk.cs.RosServerlessKubernetesCluster.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object vSwitchIds;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getAddons}
         * @param addons Property addons: The add-ons to be installed for the cluster.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getAddons}
         * @param addons Property addons: The add-ons to be installed for the cluster.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster.
         * @return {@code this}
         */
        public Builder kubernetesVersion(java.lang.String kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster.
         * @return {@code this}
         */
        public Builder kubernetesVersion(com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getNatGateway}
         * @param natGateway Property natGateway: Whether to create a NAT gateway.
         *                   The value can be true or false. If not set, the system defaults to false.
         * @return {@code this}
         */
        public Builder natGateway(java.lang.Boolean natGateway) {
            this.natGateway = natGateway;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getNatGateway}
         * @param natGateway Property natGateway: Whether to create a NAT gateway.
         *                   The value can be true or false. If not set, the system defaults to false.
         * @return {@code this}
         */
        public Builder natGateway(com.aliyun.ros.cdk.core.IResolvable natGateway) {
            this.natGateway = natGateway;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getPrivateZone}
         * @param privateZone Property privateZone: Whether to enable PrivateZone for service discovery.
         * @return {@code this}
         */
        public Builder privateZone(java.lang.Boolean privateZone) {
            this.privateZone = privateZone;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getPrivateZone}
         * @param privateZone Property privateZone: Whether to enable PrivateZone for service discovery.
         * @return {@code this}
         */
        public Builder privateZone(com.aliyun.ros.cdk.core.IResolvable privateZone) {
            this.privateZone = privateZone;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getTags}
         * @param tags Property tags: Tag the cluster.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosServerlessKubernetesCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosServerlessKubernetesCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         *              If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
         *              VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         *              If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
         *              VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: If not set, the system will automatically create a switch, and the network segment of the switch created by the system is 192.168.0.0/18.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The IDs of VSwitches.
         *                   If you leave this property empty, the system automatically creates a VSwitch.
         *                   Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The IDs of VSwitches.
         *                   If you leave this property empty, the system automatically creates a VSwitch.
         *                   Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ServerlessKubernetesClusterProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServerlessKubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServerlessKubernetesClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServerlessKubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerlessKubernetesClusterProps {
        private final java.lang.Object name;
        private final java.lang.Object addons;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.Object kubernetesVersion;
        private final java.lang.Object natGateway;
        private final java.lang.Object privateZone;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object serviceCidr;
        private final java.util.List<com.aliyun.ros.cdk.cs.RosServerlessKubernetesCluster.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object vSwitchIds;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kubernetesVersion = software.amazon.jsii.Kernel.get(this, "kubernetesVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natGateway = software.amazon.jsii.Kernel.get(this, "natGateway", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateZone = software.amazon.jsii.Kernel.get(this, "privateZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosServerlessKubernetesCluster.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.addons = builder.addons;
            this.endpointPublicAccess = builder.endpointPublicAccess;
            this.kubernetesVersion = builder.kubernetesVersion;
            this.natGateway = builder.natGateway;
            this.privateZone = builder.privateZone;
            this.securityGroupId = builder.securityGroupId;
            this.serviceCidr = builder.serviceCidr;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosServerlessKubernetesCluster.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.vSwitchIds = builder.vSwitchIds;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getEndpointPublicAccess() {
            return this.endpointPublicAccess;
        }

        @Override
        public final java.lang.Object getKubernetesVersion() {
            return this.kubernetesVersion;
        }

        @Override
        public final java.lang.Object getNatGateway() {
            return this.natGateway;
        }

        @Override
        public final java.lang.Object getPrivateZone() {
            return this.privateZone;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getServiceCidr() {
            return this.serviceCidr;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cs.RosServerlessKubernetesCluster.TagsProperty> getTags() {
            return this.tags;
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
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
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

            data.set("name", om.valueToTree(this.getName()));
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getEndpointPublicAccess() != null) {
                data.set("endpointPublicAccess", om.valueToTree(this.getEndpointPublicAccess()));
            }
            if (this.getKubernetesVersion() != null) {
                data.set("kubernetesVersion", om.valueToTree(this.getKubernetesVersion()));
            }
            if (this.getNatGateway() != null) {
                data.set("natGateway", om.valueToTree(this.getNatGateway()));
            }
            if (this.getPrivateZone() != null) {
                data.set("privateZone", om.valueToTree(this.getPrivateZone()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getServiceCidr() != null) {
                data.set("serviceCidr", om.valueToTree(this.getServiceCidr()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getVSwitchIds() != null) {
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.ServerlessKubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServerlessKubernetesClusterProps.Jsii$Proxy that = (ServerlessKubernetesClusterProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.endpointPublicAccess != null ? !this.endpointPublicAccess.equals(that.endpointPublicAccess) : that.endpointPublicAccess != null) return false;
            if (this.kubernetesVersion != null ? !this.kubernetesVersion.equals(that.kubernetesVersion) : that.kubernetesVersion != null) return false;
            if (this.natGateway != null ? !this.natGateway.equals(that.natGateway) : that.natGateway != null) return false;
            if (this.privateZone != null ? !this.privateZone.equals(that.privateZone) : that.privateZone != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.serviceCidr != null ? !this.serviceCidr.equals(that.serviceCidr) : that.serviceCidr != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            if (this.vSwitchIds != null ? !this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.endpointPublicAccess != null ? this.endpointPublicAccess.hashCode() : 0);
            result = 31 * result + (this.kubernetesVersion != null ? this.kubernetesVersion.hashCode() : 0);
            result = 31 * result + (this.natGateway != null ? this.natGateway.hashCode() : 0);
            result = 31 * result + (this.privateZone != null ? this.privateZone.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceCidr != null ? this.serviceCidr.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
